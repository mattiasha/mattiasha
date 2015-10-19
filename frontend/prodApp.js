!function(t,e,n){"use strict";function r(t,e){return e=e||Error,function(){var n,r,i=arguments[0],o="["+(t?t+":":"")+i+"] ",a=arguments[1],s=arguments;for(n=o+a.replace(/\{\d+\}/g,function(t){var e=+t.slice(1,-1);return e+2<s.length?ft(s[e+2]):t}),n=n+"\nhttp://errors.angularjs.org/1.3.4/"+(t?t+"/":"")+i,r=2;r<arguments.length;r++)n=n+(2==r?"?":"&")+"p"+(r-2)+"="+encodeURIComponent(ft(arguments[r]));return new e(n)}}function i(t){if(null==t||A(t))return!1;var e=t.length;return t.nodeType===fr&&e?!0:w(t)||ir(t)||0===e||"number"==typeof e&&e>0&&e-1 in t}function o(t,e,n){var r,a;if(t)if(S(t))for(r in t)"prototype"==r||"length"==r||"name"==r||t.hasOwnProperty&&!t.hasOwnProperty(r)||e.call(n,t[r],r,t);else if(ir(t)||i(t)){var s="object"!=typeof t;for(r=0,a=t.length;a>r;r++)(s||r in t)&&e.call(n,t[r],r,t)}else if(t.forEach&&t.forEach!==o)t.forEach(e,n,t);else for(r in t)t.hasOwnProperty(r)&&e.call(n,t[r],r,t);return t}function a(t){return Object.keys(t).sort()}function s(t,e,n){for(var r=a(t),i=0;i<r.length;i++)e.call(n,t[r[i]],r[i]);return r}function u(t){return function(e,n){t(n,e)}}function c(){return++nr}function l(t,e){e?t.$$hashKey=e:delete t.$$hashKey}function f(t){for(var e=t.$$hashKey,n=1,r=arguments.length;r>n;n++){var i=arguments[n];if(i)for(var o=Object.keys(i),a=0,s=o.length;s>a;a++){var u=o[a];t[u]=i[u]}}return l(t,e),t}function h(t){return parseInt(t,10)}function p(t,e){return f(Object.create(t),e)}function $(){}function d(t){return t}function v(t){return function(){return t}}function m(t){return"undefined"==typeof t}function g(t){return"undefined"!=typeof t}function y(t){return null!==t&&"object"==typeof t}function w(t){return"string"==typeof t}function b(t){return"number"==typeof t}function x(t){return"[object Date]"===Qn.call(t)}function S(t){return"function"==typeof t}function C(t){return"[object RegExp]"===Qn.call(t)}function A(t){return t&&t.window===t}function k(t){return t&&t.$evalAsync&&t.$watch}function E(t){return"[object File]"===Qn.call(t)}function O(t){return"[object Blob]"===Qn.call(t)}function T(t){return"boolean"==typeof t}function M(t){return t&&S(t.then)}function N(t){return!(!t||!(t.nodeName||t.prop&&t.attr&&t.find))}function V(t){var e,n={},r=t.split(",");for(e=0;e<r.length;e++)n[r[e]]=!0;return n}function D(t){return Fn(t.nodeName||t[0]&&t[0].nodeName)}function j(t,e){var n=t.indexOf(e);return n>=0&&t.splice(n,1),e}function R(t,e,n,r){if(A(t)||k(t))throw tr("cpws","Can't copy! Making copies of Window or Scope instances is not supported.");if(e){if(t===e)throw tr("cpi","Can't copy! Source and destination are identical.");if(n=n||[],r=r||[],y(t)){var i=n.indexOf(t);if(-1!==i)return r[i];n.push(t),r.push(e)}var a;if(ir(t)){e.length=0;for(var s=0;s<t.length;s++)a=R(t[s],null,n,r),y(t[s])&&(n.push(t[s]),r.push(a)),e.push(a)}else{var u=e.$$hashKey;ir(e)?e.length=0:o(e,function(t,n){delete e[n]});for(var c in t)t.hasOwnProperty(c)&&(a=R(t[c],null,n,r),y(t[c])&&(n.push(t[c]),r.push(a)),e[c]=a);l(e,u)}}else if(e=t,t)if(ir(t))e=R(t,[],n,r);else if(x(t))e=new Date(t.getTime());else if(C(t))e=new RegExp(t.source,t.toString().match(/[^\/]*$/)[0]),e.lastIndex=t.lastIndex;else if(y(t)){var f=Object.create(Object.getPrototypeOf(t));e=R(t,f,n,r)}return e}function P(t,e){if(ir(t)){e=e||[];for(var n=0,r=t.length;r>n;n++)e[n]=t[n]}else if(y(t)){e=e||{};for(var i in t)("$"!==i.charAt(0)||"$"!==i.charAt(1))&&(e[i]=t[i])}return e||t}function q(t,e){if(t===e)return!0;if(null===t||null===e)return!1;if(t!==t&&e!==e)return!0;var r,i,o,a=typeof t,s=typeof e;if(a==s&&"object"==a){if(!ir(t)){if(x(t))return x(e)?q(t.getTime(),e.getTime()):!1;if(C(t)&&C(e))return t.toString()==e.toString();if(k(t)||k(e)||A(t)||A(e)||ir(e))return!1;o={};for(i in t)if("$"!==i.charAt(0)&&!S(t[i])){if(!q(t[i],e[i]))return!1;o[i]=!0}for(i in e)if(!o.hasOwnProperty(i)&&"$"!==i.charAt(0)&&e[i]!==n&&!S(e[i]))return!1;return!0}if(!ir(e))return!1;if((r=t.length)==e.length){for(i=0;r>i;i++)if(!q(t[i],e[i]))return!1;return!0}}return!1}function I(t,e,n){return t.concat(Zn.call(e,n))}function U(t,e){return Zn.call(t,e||0)}function _(t,e){var n=arguments.length>2?U(arguments,2):[];return!S(e)||e instanceof RegExp?e:n.length?function(){return arguments.length?e.apply(t,I(n,arguments,0)):e.apply(t,n)}:function(){return arguments.length?e.apply(t,arguments):e.call(t)}}function F(t,r){var i=r;return"string"==typeof t&&"$"===t.charAt(0)&&"$"===t.charAt(1)?i=n:A(r)?i="$WINDOW":r&&e===r?i="$DOCUMENT":k(r)&&(i="$SCOPE"),i}function H(t,e){return"undefined"==typeof t?n:JSON.stringify(t,F,e?"  ":null)}function L(t){return w(t)?JSON.parse(t):t}function B(t){t=Gn(t).clone();try{t.empty()}catch(e){}var n=Gn("<div>").append(t).html();try{return t[0].nodeType===hr?Fn(n):n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(t,e){return"<"+Fn(e)})}catch(e){return Fn(n)}}function z(t){try{return decodeURIComponent(t)}catch(e){}}function W(t){var e,n,r={};return o((t||"").split("&"),function(t){if(t&&(e=t.replace(/\+/g,"%20").split("="),n=z(e[0]),g(n))){var i=g(e[1])?z(e[1]):!0;Hn.call(r,n)?ir(r[n])?r[n].push(i):r[n]=[r[n],i]:r[n]=i}}),r}function G(t){var e=[];return o(t,function(t,n){ir(t)?o(t,function(t){e.push(Y(n,!0)+(t===!0?"":"="+Y(t,!0)))}):e.push(Y(n,!0)+(t===!0?"":"="+Y(t,!0)))}),e.length?e.join("&"):""}function J(t){return Y(t,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Y(t,e){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,e?"%20":"+")}function Z(t,e){var n,r,i=ur.length;for(t=Gn(t),r=0;i>r;++r)if(n=ur[r]+e,w(n=t.attr(n)))return n;return null}function K(t,e){var n,r,i={};o(ur,function(e){var i=e+"app";!n&&t.hasAttribute&&t.hasAttribute(i)&&(n=t,r=t.getAttribute(i))}),o(ur,function(e){var i,o=e+"app";!n&&(i=t.querySelector("["+o.replace(":","\\:")+"]"))&&(n=i,r=i.getAttribute(o))}),n&&(i.strictDi=null!==Z(n,"strict-di"),e(n,r?[r]:[],i))}function X(n,r,i){y(i)||(i={});var a={strictDi:!1};i=f(a,i);var s=function(){if(n=Gn(n),n.injector()){var t=n[0]===e?"document":B(n);throw tr("btstrpd","App Already Bootstrapped with this Element '{0}'",t.replace(/</,"&lt;").replace(/>/,"&gt;"))}r=r||[],r.unshift(["$provide",function(t){t.value("$rootElement",n)}]),i.debugInfoEnabled&&r.push(["$compileProvider",function(t){t.debugInfoEnabled(!0)}]),r.unshift("ng");var o=Ht(r,i.strictDi);return o.invoke(["$rootScope","$rootElement","$compile","$injector",function(t,e,n,r){t.$apply(function(){e.data("$injector",r),n(e)(t)})}]),o},u=/^NG_ENABLE_DEBUG_INFO!/,c=/^NG_DEFER_BOOTSTRAP!/;return t&&u.test(t.name)&&(i.debugInfoEnabled=!0,t.name=t.name.replace(u,"")),t&&!c.test(t.name)?s():(t.name=t.name.replace(c,""),void(er.resumeBootstrap=function(t){o(t,function(t){r.push(t)}),s()}))}function Q(){t.name="NG_ENABLE_DEBUG_INFO!"+t.name,t.location.reload()}function tt(t){return er.element(t).injector().get("$$testability")}function et(t,e){return e=e||"_",t.replace(cr,function(t,n){return(n?e:"")+t.toLowerCase()})}function nt(){var e;lr||(Jn=t.jQuery,Jn&&Jn.fn.on?(Gn=Jn,f(Jn.fn,{scope:Mr.scope,isolateScope:Mr.isolateScope,controller:Mr.controller,injector:Mr.injector,inheritedData:Mr.inheritedData}),e=Jn.cleanData,Jn.cleanData=function(t){var n;if(rr)rr=!1;else for(var r,i=0;null!=(r=t[i]);i++)n=Jn._data(r,"events"),n&&n.$destroy&&Jn(r).triggerHandler("$destroy");e(t)}):Gn=yt,er.element=Gn,lr=!0)}function rt(t,e,n){if(!t)throw tr("areq","Argument '{0}' is {1}",e||"?",n||"required");return t}function it(t,e,n){return n&&ir(t)&&(t=t[t.length-1]),rt(S(t),e,"not a function, got "+(t&&"object"==typeof t?t.constructor.name||"Object":typeof t)),t}function ot(t,e){if("hasOwnProperty"===t)throw tr("badname","hasOwnProperty is not a valid {0} name",e)}function at(t,e,n){if(!e)return t;for(var r,i=e.split("."),o=t,a=i.length,s=0;a>s;s++)r=i[s],t&&(t=(o=t)[r]);return!n&&S(t)?_(o,t):t}function st(t){var e=t[0],n=t[t.length-1],r=[e];do{if(e=e.nextSibling,!e)break;r.push(e)}while(e!==n);return Gn(r)}function ut(){return Object.create(null)}function ct(t){function e(t,e,n){return t[e]||(t[e]=n())}var n=r("$injector"),i=r("ng"),o=e(t,"angular",Object);return o.$$minErr=o.$$minErr||r,e(o,"module",function(){var t={};return function(r,o,a){var s=function(t,e){if("hasOwnProperty"===t)throw i("badname","hasOwnProperty is not a valid {0} name",e)};return s(r,"module"),o&&t.hasOwnProperty(r)&&(t[r]=null),e(t,r,function(){function t(t,n,r,i){return i||(i=e),function(){return i[r||"push"]([t,n,arguments]),c}}if(!o)throw n("nomod","Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.",r);var e=[],i=[],s=[],u=t("$injector","invoke","push",i),c={_invokeQueue:e,_configBlocks:i,_runBlocks:s,requires:o,name:r,provider:t("$provide","provider"),factory:t("$provide","factory"),service:t("$provide","service"),value:t("$provide","value"),constant:t("$provide","constant","unshift"),animation:t("$animateProvider","register"),filter:t("$filterProvider","register"),controller:t("$controllerProvider","register"),directive:t("$compileProvider","directive"),config:u,run:function(t){return s.push(t),this}};return a&&u(a),c})}})}function lt(t){var e=[];return JSON.stringify(t,function(t,n){if(n=F(t,n),y(n)){if(e.indexOf(n)>=0)return"<<already seen>>";e.push(n)}return n})}function ft(t){return"function"==typeof t?t.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof t?"undefined":"string"!=typeof t?lt(t):t}function ht(e){f(e,{bootstrap:X,copy:R,extend:f,equals:q,element:Gn,forEach:o,injector:Ht,noop:$,bind:_,toJson:H,fromJson:L,identity:d,isUndefined:m,isDefined:g,isString:w,isFunction:S,isObject:y,isNumber:b,isElement:N,isArray:ir,version:vr,isDate:x,lowercase:Fn,uppercase:Ln,callbacks:{counter:0},getTestability:tt,$$minErr:r,$$csp:sr,reloadWithDebugInfo:Q}),Yn=ct(t);try{Yn("ngLocale")}catch(n){Yn("ngLocale",[]).provider("$locale",pe)}Yn("ng",["ngLocale"],["$provide",function(t){t.provider({$$sanitizeUri:Be}),t.provider("$compile",Yt).directive({a:bi,input:_i,textarea:_i,form:ki,script:Vo,select:Ro,style:qo,option:Po,ngBind:oo,ngBindHtml:so,ngBindTemplate:ao,ngClass:uo,ngClassEven:lo,ngClassOdd:co,ngCloak:fo,ngController:ho,ngForm:Ei,ngHide:ko,ngIf:vo,ngInclude:mo,ngInit:yo,ngNonBindable:wo,ngPluralize:bo,ngRepeat:xo,ngShow:Ao,ngStyle:Eo,ngSwitch:Oo,ngSwitchWhen:To,ngSwitchDefault:Mo,ngOptions:jo,ngTransclude:No,ngModel:Yi,ngList:eo,ngChange:Zi,pattern:Xi,ngPattern:Xi,required:Ki,ngRequired:Ki,minlength:to,ngMinlength:to,maxlength:Qi,ngMaxlength:Qi,ngValue:ro,ngModelOptions:io}).directive({ngInclude:go}).directive(xi).directive(po),t.provider({$anchorScroll:Lt,$animate:_r,$browser:Wt,$cacheFactory:Gt,$controller:Qt,$document:te,$exceptionHandler:ee,$filter:nn,$interpolate:fe,$interval:he,$http:se,$httpBackend:ce,$location:ke,$log:Ee,$parse:Ie,$rootScope:Le,$q:Ue,$$q:_e,$sce:Je,$sceDelegate:Ge,$sniffer:Ye,$templateCache:Jt,$templateRequest:Ze,$$testability:Ke,$timeout:Xe,$window:en,$$rAF:He,$$asyncCallback:Bt})}])}function pt(){return++gr}function $t(t){return t.replace(br,function(t,e,n,r){return r?n.toUpperCase():n}).replace(xr,"Moz$1")}function dt(t){return!kr.test(t)}function vt(t){var e=t.nodeType;return e===fr||!e||e===$r}function mt(t,e){var n,r,i,a,s=e.createDocumentFragment(),u=[];if(dt(t))u.push(e.createTextNode(t));else{for(n=n||s.appendChild(e.createElement("div")),r=(Er.exec(t)||["",""])[1].toLowerCase(),i=Tr[r]||Tr._default,n.innerHTML=i[1]+t.replace(Or,"<$1></$2>")+i[2],a=i[0];a--;)n=n.lastChild;u=I(u,n.childNodes),n=s.firstChild,n.textContent=""}return s.textContent="",s.innerHTML="",o(u,function(t){s.appendChild(t)}),s}function gt(t,n){n=n||e;var r;return(r=Ar.exec(t))?[n.createElement(r[1])]:(r=mt(t,n))?r.childNodes:[]}function yt(t){if(t instanceof yt)return t;var e;if(w(t)&&(t=or(t),e=!0),!(this instanceof yt)){if(e&&"<"!=t.charAt(0))throw Cr("nosel","Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");return new yt(t)}e?Tt(this,gt(t)):Tt(this,t)}function wt(t){return t.cloneNode(!0)}function bt(t,e){if(e||St(t),t.querySelectorAll)for(var n=t.querySelectorAll("*"),r=0,i=n.length;i>r;r++)St(n[r])}function xt(t,e,n,r){if(g(r))throw Cr("offargs","jqLite#off() does not support the `selector` argument");var i=Ct(t),a=i&&i.events,s=i&&i.handle;if(s)if(e)o(e.split(" "),function(e){if(g(n)){var r=a[e];if(j(r||[],n),r&&r.length>0)return}wr(t,e,s),delete a[e]});else for(e in a)"$destroy"!==e&&wr(t,e,s),delete a[e]}function St(t,e){var r=t.ng339,i=r&&mr[r];if(i){if(e)return void delete i.data[e];i.handle&&(i.events.$destroy&&i.handle({},"$destroy"),xt(t)),delete mr[r],t.ng339=n}}function Ct(t,e){var r=t.ng339,i=r&&mr[r];return e&&!i&&(t.ng339=r=pt(),i=mr[r]={events:{},data:{},handle:n}),i}function At(t,e,n){if(vt(t)){var r=g(n),i=!r&&e&&!y(e),o=!e,a=Ct(t,!i),s=a&&a.data;if(r)s[e]=n;else{if(o)return s;if(i)return s&&s[e];f(s,e)}}}function kt(t,e){return t.getAttribute?(" "+(t.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+e+" ")>-1:!1}function Et(t,e){e&&t.setAttribute&&o(e.split(" "),function(e){t.setAttribute("class",or((" "+(t.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+or(e)+" "," ")))})}function Ot(t,e){if(e&&t.setAttribute){var n=(" "+(t.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");o(e.split(" "),function(t){t=or(t),-1===n.indexOf(" "+t+" ")&&(n+=t+" ")}),t.setAttribute("class",or(n))}}function Tt(t,e){if(e)if(e.nodeType)t[t.length++]=e;else{var n=e.length;if("number"==typeof n&&e.window!==e){if(n)for(var r=0;n>r;r++)t[t.length++]=e[r]}else t[t.length++]=e}}function Mt(t,e){return Nt(t,"$"+(e||"ngController")+"Controller")}function Nt(t,e,r){t.nodeType==$r&&(t=t.documentElement);for(var i=ir(e)?e:[e];t;){for(var o=0,a=i.length;a>o;o++)if((r=Gn.data(t,i[o]))!==n)return r;t=t.parentNode||t.nodeType===dr&&t.host}}function Vt(t){for(bt(t,!0);t.firstChild;)t.removeChild(t.firstChild)}function Dt(t,e){e||bt(t);var n=t.parentNode;n&&n.removeChild(t)}function jt(e,n){n=n||t,"complete"===n.document.readyState?n.setTimeout(e):Gn(n).on("load",e)}function Rt(t,e){var n=Nr[e.toLowerCase()];return n&&Vr[D(t)]&&n}function Pt(t,e){var n=t.nodeName;return("INPUT"===n||"TEXTAREA"===n)&&Dr[e]}function qt(t,e){var n=function(n,r){n.isDefaultPrevented=function(){return n.defaultPrevented};var i=e[r||n.type],o=i?i.length:0;if(o){if(m(n.immediatePropagationStopped)){var a=n.stopImmediatePropagation;n.stopImmediatePropagation=function(){n.immediatePropagationStopped=!0,n.stopPropagation&&n.stopPropagation(),a&&a.call(n)}}n.isImmediatePropagationStopped=function(){return n.immediatePropagationStopped===!0},o>1&&(i=P(i));for(var s=0;o>s;s++)n.isImmediatePropagationStopped()||i[s].call(t,n)}};return n.elem=t,n}function It(t,e){var n=t&&t.$$hashKey;if(n)return"function"==typeof n&&(n=t.$$hashKey()),n;var r=typeof t;return n="function"==r||"object"==r&&null!==t?t.$$hashKey=r+":"+(e||c)():r+":"+t}function Ut(t,e){if(e){var n=0;this.nextUid=function(){return++n}}o(t,this.put,this)}function _t(t){var e=t.toString().replace(qr,""),n=e.match(jr);return n?"function("+(n[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Ft(t,e,n){var r,i,a,s;if("function"==typeof t){if(!(r=t.$inject)){if(r=[],t.length){if(e)throw w(n)&&n||(n=t.name||_t(t)),Ir("strictdi","{0} is not using explicit annotation and cannot be invoked in strict mode",n);i=t.toString().replace(qr,""),a=i.match(jr),o(a[1].split(Rr),function(t){t.replace(Pr,function(t,e,n){r.push(n)})})}t.$inject=r}}else ir(t)?(s=t.length-1,it(t[s],"fn"),r=t.slice(0,s)):it(t,"fn",!0);return r}function Ht(t,e){function r(t){return function(e,n){return y(e)?void o(e,u(t)):t(e,n)}}function i(t,e){if(ot(t,"service"),(S(e)||ir(e))&&(e=k.instantiate(e)),!e.$get)throw Ir("pget","Provider '{0}' must define $get factory method.",t);return A[t+b]=e}function a(t,e){return function(){var r=O.invoke(e,this,n,t);if(m(r))throw Ir("undef","Provider '{0}' must return a value from $get factory method.",t);return r}}function s(t,e,n){return i(t,{$get:n!==!1?a(t,e):e})}function c(t,e){return s(t,["$injector",function(t){return t.instantiate(e)}])}function l(t,e){return s(t,v(e),!1)}function f(t,e){ot(t,"constant"),A[t]=e,E[t]=e}function h(t,e){var n=k.get(t+b),r=n.$get;n.$get=function(){var t=O.invoke(r,n);return O.invoke(e,null,{$delegate:t})}}function p(t){var e,n=[];return o(t,function(t){function r(t){var e,n;for(e=0,n=t.length;n>e;e++){var r=t[e],i=k.get(r[0]);i[r[1]].apply(i,r[2])}}if(!C.get(t)){C.put(t,!0);try{w(t)?(e=Yn(t),n=n.concat(p(e.requires)).concat(e._runBlocks),r(e._invokeQueue),r(e._configBlocks)):S(t)?n.push(k.invoke(t)):ir(t)?n.push(k.invoke(t)):it(t,"module")}catch(i){throw ir(t)&&(t=t[t.length-1]),i.message&&i.stack&&-1==i.stack.indexOf(i.message)&&(i=i.message+"\n"+i.stack),Ir("modulerr","Failed to instantiate module {0} due to:\n{1}",t,i.stack||i.message||i)}}}),n}function d(t,n){function r(e){if(t.hasOwnProperty(e)){if(t[e]===g)throw Ir("cdep","Circular dependency found: {0}",e+" <- "+x.join(" <- "));return t[e]}try{return x.unshift(e),t[e]=g,t[e]=n(e)}catch(r){throw t[e]===g&&delete t[e],r}finally{x.shift()}}function i(t,n,i,o){"string"==typeof i&&(o=i,i=null);var a,s,u,c=[],l=Ft(t,e,o);for(s=0,a=l.length;a>s;s++){if(u=l[s],"string"!=typeof u)throw Ir("itkn","Incorrect injection token! Expected service name as string, got {0}",u);c.push(i&&i.hasOwnProperty(u)?i[u]:r(u))}return ir(t)&&(t=t[a]),t.apply(n,c)}function o(t,e,n){var r=Object.create((ir(t)?t[t.length-1]:t).prototype),o=i(t,r,e,n);return y(o)||S(o)?o:r}return{invoke:i,instantiate:o,get:r,annotate:Ft,has:function(e){return A.hasOwnProperty(e+b)||t.hasOwnProperty(e)}}}e=e===!0;var g={},b="Provider",x=[],C=new Ut([],!0),A={$provide:{provider:r(i),factory:r(s),service:r(c),value:r(l),constant:r(f),decorator:h}},k=A.$injector=d(A,function(){throw Ir("unpr","Unknown provider: {0}",x.join(" <- "))}),E={},O=E.$injector=d(E,function(t){var e=k.get(t+b);return O.invoke(e.$get,e,n,t)});return o(p(t),function(t){O.invoke(t||$)}),O}function Lt(){var t=!0;this.disableAutoScrolling=function(){t=!1},this.$get=["$window","$location","$rootScope",function(e,n,r){function i(t){var e=null;return Array.prototype.some.call(t,function(t){return"a"===D(t)?(e=t,!0):void 0}),e}function o(){var t=s.yOffset;if(S(t))t=t();else if(N(t)){var n=t[0],r=e.getComputedStyle(n);t="fixed"!==r.position?0:n.getBoundingClientRect().bottom}else b(t)||(t=0);return t}function a(t){if(t){t.scrollIntoView();var n=o();if(n){var r=t.getBoundingClientRect().top;e.scrollBy(0,r-n)}}else e.scrollTo(0,0)}function s(){var t,e=n.hash();e?(t=u.getElementById(e))?a(t):(t=i(u.getElementsByName(e)))?a(t):"top"===e&&a(null):a(null)}var u=e.document;return t&&r.$watch(function(){return n.hash()},function(t,e){(t!==e||""!==t)&&jt(function(){r.$evalAsync(s)})}),s}]}function Bt(){this.$get=["$$rAF","$timeout",function(t,e){return t.supported?function(e){return t(e)}:function(t){return e(t,0,!1)}}]}function zt(t,e,r,i){function a(t){try{t.apply(null,U(arguments,1))}finally{if(x--,0===x)for(;S.length;)try{S.pop()()}catch(e){r.error(e)}}}function s(t,e){!function n(){o(A,function(t){t()}),C=e(n,t)}()}function u(){c(),l()}function c(){k=t.history.state,k=m(k)?null:k,q(k,D)&&(k=D),D=k}function l(){(O!==h.url()||E!==k)&&(O=h.url(),E=k,o(N,function(t){t(h.url(),k)}))}function f(t){try{return decodeURIComponent(t)}catch(e){return t}}var h=this,p=e[0],d=t.location,v=t.history,g=t.setTimeout,y=t.clearTimeout,b={};h.isMock=!1;var x=0,S=[];h.$$completeOutstandingRequest=a,h.$$incOutstandingRequestCount=function(){x++},h.notifyWhenNoOutstandingRequests=function(t){o(A,function(t){t()}),0===x?t():S.push(t)};var C,A=[];h.addPollFn=function(t){return m(C)&&s(100,g),A.push(t),t};var k,E,O=d.href,T=e.find("base"),M=null;c(),E=k,h.url=function(e,n,r){if(m(r)&&(r=null),d!==t.location&&(d=t.location),v!==t.history&&(v=t.history),e){var o=E===r;if(O===e&&(!i.history||o))return h;var a=O&&ge(O)===ge(e);return O=e,E=r,!i.history||a&&o?(a||(M=e),n?d.replace(e):d.href=e):(v[n?"replaceState":"pushState"](r,"",e),c(),E=k),h}return M||d.href.replace(/%27/g,"'")},h.state=function(){return k};var N=[],V=!1,D=null;h.onUrlChange=function(e){return V||(i.history&&Gn(t).on("popstate",u),Gn(t).on("hashchange",u),V=!0),N.push(e),e},h.$$checkUrlChange=l,h.baseHref=function(){var t=T.attr("href");return t?t.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var j={},R="",P=h.baseHref();h.cookies=function(t,e){var i,o,a,s,u;if(!t){if(p.cookie!==R)for(R=p.cookie,o=R.split("; "),j={},s=0;s<o.length;s++)a=o[s],u=a.indexOf("="),u>0&&(t=f(a.substring(0,u)),j[t]===n&&(j[t]=f(a.substring(u+1))));return j}e===n?p.cookie=encodeURIComponent(t)+"=;path="+P+";expires=Thu, 01 Jan 1970 00:00:00 GMT":w(e)&&(i=(p.cookie=encodeURIComponent(t)+"="+encodeURIComponent(e)+";path="+P).length+1,i>4096&&r.warn("Cookie '"+t+"' possibly not set or overflowed because it was too large ("+i+" > 4096 bytes)!"))},h.defer=function(t,e){var n;return x++,n=g(function(){delete b[n],a(t)},e||0),b[n]=!0,n},h.defer.cancel=function(t){return b[t]?(delete b[t],y(t),a($),!0):!1}}function Wt(){this.$get=["$window","$log","$sniffer","$document",function(t,e,n,r){return new zt(t,r,e,n)}]}function Gt(){this.$get=function(){function t(t,n){function i(t){t!=h&&(p?p==t&&(p=t.n):p=t,o(t.n,t.p),o(t,h),h=t,h.n=null)}function o(t,e){t!=e&&(t&&(t.p=e),e&&(e.n=t))}if(t in e)throw r("$cacheFactory")("iid","CacheId '{0}' is already taken!",t);var a=0,s=f({},n,{id:t}),u={},c=n&&n.capacity||Number.MAX_VALUE,l={},h=null,p=null;return e[t]={put:function(t,e){if(c<Number.MAX_VALUE){var n=l[t]||(l[t]={key:t});i(n)}return m(e)?void 0:(t in u||a++,u[t]=e,a>c&&this.remove(p.key),e)},get:function(t){if(c<Number.MAX_VALUE){var e=l[t];if(!e)return;i(e)}return u[t]},remove:function(t){if(c<Number.MAX_VALUE){var e=l[t];if(!e)return;e==h&&(h=e.p),e==p&&(p=e.n),o(e.n,e.p),delete l[t]}delete u[t],a--},removeAll:function(){u={},a=0,l={},h=p=null},destroy:function(){u=null,s=null,l=null,delete e[t]},info:function(){return f({},s,{size:a})}}}var e={};return t.info=function(){var t={};return o(e,function(e,n){t[n]=e.info()}),t},t.get=function(t){return e[t]},t}}function Jt(){this.$get=["$cacheFactory",function(t){return t("templates")}]}function Yt(t,r){function i(t,e){var n=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,r={};return o(t,function(t,i){var o=t.match(n);if(!o)throw Fr("iscp","Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}",e,i,t);r[i]={mode:o[1][0],collection:"*"===o[2],optional:"?"===o[3],attrName:o[4]||i}}),r}var a={},s="Directive",c=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,l=/(([\w\-]+)(?:\:([^;]+))?;?)/,h=V("ngSrc,ngSrcset,src,srcset"),m=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,b=/^(on[a-z]+|formaction)$/;this.directive=function C(e,n){return ot(e,"directive"),w(e)?(rt(n,"directiveFactory"),a.hasOwnProperty(e)||(a[e]=[],t.factory(e+s,["$injector","$exceptionHandler",function(t,n){var r=[];return o(a[e],function(o,a){try{var s=t.invoke(o);S(s)?s={compile:v(s)}:!s.compile&&s.link&&(s.compile=v(s.link)),s.priority=s.priority||0,s.index=a,s.name=s.name||e,s.require=s.require||s.controller&&s.name,s.restrict=s.restrict||"EA",y(s.scope)&&(s.$$isolateBindings=i(s.scope,s.name)),r.push(s)}catch(u){n(u)}}),r}])),a[e].push(n)):o(e,u(C)),this},this.aHrefSanitizationWhitelist=function(t){return g(t)?(r.aHrefSanitizationWhitelist(t),this):r.aHrefSanitizationWhitelist()},this.imgSrcSanitizationWhitelist=function(t){return g(t)?(r.imgSrcSanitizationWhitelist(t),this):r.imgSrcSanitizationWhitelist()};var x=!0;this.debugInfoEnabled=function(t){return g(t)?(x=t,this):x},this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(t,r,i,u,v,g,C,A,E,O,T){function M(t,e){try{t.addClass(e)}catch(n){}}function N(t,e,n,r,i){t instanceof Gn||(t=Gn(t)),o(t,function(e,n){e.nodeType==hr&&e.nodeValue.match(/\S+/)&&(t[n]=Gn(e).wrap("<span></span>").parent()[0])});var a=R(t,e,t,n,r,i);N.$$addScopeClass(t);var s=null;return function(e,n,r){rt(e,"scope"),r=r||{};var i=r.parentBoundTranscludeFn,o=r.transcludeControllers,u=r.futureParentElement;i&&i.$$boundTransclude&&(i=i.$$boundTransclude),s||(s=V(u));var c;if(c="html"!==s?Gn(X(s,Gn("<div>").append(t).html())):n?Mr.clone.call(t):t,o)for(var l in o)c.data("$"+l+"Controller",o[l].instance);return N.$$addScopeInfo(c,e),n&&n(c,e),a&&a(e,c,c,i),c}}function V(t){var e=t&&t[0];return e&&"foreignobject"!==D(e)&&e.toString().match(/SVG/)?"svg":"html"}function R(t,e,r,i,o,a){function s(t,r,i,o){var a,s,u,c,l,f,h,p,v;if($){var m=r.length;for(v=new Array(m),l=0;l<d.length;l+=3)h=d[l],v[h]=r[h]}else v=r;for(l=0,f=d.length;f>l;)u=v[d[l++]],a=d[l++],s=d[l++],a?(a.scope?(c=t.$new(),N.$$addScopeInfo(Gn(u),c)):c=t,p=a.transcludeOnThisElement?P(t,a.transclude,o,a.elementTranscludeOnThisElement):!a.templateOnThisElement&&o?o:!o&&e?P(t,e):null,a(s,c,u,i,p)):s&&s(t,u.childNodes,n,o)}for(var u,c,l,f,h,p,$,d=[],v=0;v<t.length;v++)u=new at,c=I(t[v],[],u,0===v?i:n,o),l=c.length?H(c,t[v],u,e,r,null,[],[],a):null,l&&l.scope&&N.$$addScopeClass(u.$$element),h=l&&l.terminal||!(f=t[v].childNodes)||!f.length?null:R(f,l?(l.transcludeOnThisElement||!l.templateOnThisElement)&&l.transclude:e),(l||h)&&(d.push(v,l,h),p=!0,$=$||l),a=null;return p?s:null}function P(t,e,n,r){var i=function(r,i,o,a,s){return r||(r=t.$new(!1,s),r.$$transcluded=!0),e(r,i,{parentBoundTranscludeFn:n,transcludeControllers:o,futureParentElement:a})};return i}function I(t,e,n,r,i){var o,a,s=t.nodeType,u=n.$attr;switch(s){case fr:z(e,Zt(D(t)),"E",r,i);for(var f,h,p,$,d,v,m=t.attributes,g=0,y=m&&m.length;y>g;g++){var b=!1,x=!1;f=m[g],h=f.name,d=or(f.value),$=Zt(h),(v=ft.test($))&&(h=et($.substr(6),"-"));var S=$.replace(/(Start|End)$/,"");W(S)&&$===S+"Start"&&(b=h,x=h.substr(0,h.length-5)+"end",h=h.substr(0,h.length-6)),p=Zt(h.toLowerCase()),u[p]=h,(v||!n.hasOwnProperty(p))&&(n[p]=d,Rt(t,p)&&(n[p]=!0)),tt(t,e,d,p,v),z(e,p,"A",r,i,b,x)}if(a=t.className,w(a)&&""!==a)for(;o=l.exec(a);)p=Zt(o[2]),z(e,p,"C",r,i)&&(n[p]=or(o[3])),a=a.substr(o.index+o[0].length);break;case hr:K(e,t.nodeValue);break;case pr:try{o=c.exec(t.nodeValue),o&&(p=Zt(o[1]),z(e,p,"M",r,i)&&(n[p]=or(o[2])))}catch(C){}}return e.sort(Y),e}function _(t,e,n){var r=[],i=0;if(e&&t.hasAttribute&&t.hasAttribute(e)){do{if(!t)throw Fr("uterdir","Unterminated attribute, found '{0}' but no matching '{1}' found.",e,n);t.nodeType==fr&&(t.hasAttribute(e)&&i++,t.hasAttribute(n)&&i--),r.push(t),t=t.nextSibling}while(i>0)}else r.push(t);return Gn(r)}function F(t,e,n){return function(r,i,o,a,s){return i=_(i[0],e,n),t(r,i,o,a,s)}}function H(t,a,s,u,c,l,f,h,p){function $(t,e,n,r){t&&(n&&(t=F(t,n,r)),t.require=A.require,t.directiveName=E,(j===A||A.$$isolateScope)&&(t=it(t,{isolateScope:!0})),f.push(t)),e&&(n&&(e=F(e,n,r)),e.require=A.require,e.directiveName=E,(j===A||A.$$isolateScope)&&(e=it(e,{isolateScope:!0})),h.push(e))}function d(t,e,n,r){var i,a,s="data",u=!1,c=n;if(w(e)){if(a=e.match(m),e=e.substring(a[0].length),a[3]&&(a[1]?a[3]=null:a[1]=a[3]),"^"===a[1]?s="inheritedData":"^^"===a[1]&&(s="inheritedData",c=n.parent()),"?"===a[2]&&(u=!0),i=null,r&&"data"===s&&(i=r[e])&&(i=i.instance),i=i||c[s]("$"+e+"Controller"),!i&&!u)throw Fr("ctreq","Controller '{0}', required by directive '{1}', can't be found!",e,t);return i||null}return ir(e)&&(i=[],o(e,function(e){i.push(d(t,e,n,r))})),i}function b(t,e,i,u,c){function l(t,e,r){var i;return k(t)||(r=e,e=t,t=n),W&&(i=b),r||(r=W?S.parent():S),c(t,e,i,r,T)}var p,$,m,y,w,b,x,S,A;if(a===i?(A=s,S=s.$$element):(S=Gn(i),A=new at(S,s)),j&&(w=e.$new(!0)),c&&(x=l,x.$$boundTransclude=c),D&&(C={},b={},o(D,function(t){var n,r={$scope:t===j||t.$$isolateScope?w:e,$element:S,$attrs:A,$transclude:x};y=t.controller,"@"==y&&(y=A[t.name]),n=g(y,r,!0,t.controllerAs),b[t.name]=n,W||S.data("$"+t.name+"Controller",n.instance),C[t.name]=n})),j){N.$$addScopeInfo(S,w,!0,!(R&&(R===j||R===j.$$originalDirective))),N.$$addScopeClass(S,!0);var E=C&&C[j.name],O=w;E&&E.identifier&&j.bindToController===!0&&(O=E.instance),o(w.$$isolateBindings=j.$$isolateBindings,function(t,n){var i,o,a,s,u=t.attrName,c=t.optional,l=t.mode;switch(l){case"@":A.$observe(u,function(t){O[n]=t}),A.$$observers[u].$$scope=e,A[u]&&(O[n]=r(A[u])(e));break;case"=":if(c&&!A[u])return;o=v(A[u]),s=o.literal?q:function(t,e){return t===e||t!==t&&e!==e},a=o.assign||function(){throw i=O[n]=o(e),Fr("nonassign","Expression '{0}' used with directive '{1}' is non-assignable!",A[u],j.name)},i=O[n]=o(e);var f=function(t){return s(t,O[n])||(s(t,i)?a(e,t=O[n]):O[n]=t),i=t};f.$stateful=!0;var h;h=t.collection?e.$watchCollection(A[u],f):e.$watch(v(A[u],f),null,o.literal),w.$on("$destroy",h);break;case"&":o=v(A[u]),O[n]=function(t){return o(e,t)}}})}for(C&&(o(C,function(t){t()}),C=null),p=0,$=f.length;$>p;p++)m=f[p],ot(m,m.isolateScope?w:e,S,A,m.require&&d(m.directiveName,m.require,S,b),x);var T=e;for(j&&(j.template||null===j.templateUrl)&&(T=w),t&&t(T,i.childNodes,n,c),p=h.length-1;p>=0;p--)m=h[p],ot(m,m.isolateScope?w:e,S,A,m.require&&d(m.directiveName,m.require,S,b),x)}p=p||{};for(var x,C,A,E,O,T,M,V=-Number.MAX_VALUE,D=p.controllerDirectives,j=p.newIsolateScopeDirective,R=p.templateDirective,P=p.nonTlbTranscludeDirective,H=!1,z=!1,W=p.hasElementTranscludeDirective,Y=s.$$element=Gn(a),K=l,Q=u,tt=0,et=t.length;et>tt;tt++){A=t[tt];var rt=A.$$start,st=A.$$end;if(rt&&(Y=_(a,rt,st)),O=n,V>A.priority)break;if((M=A.scope)&&(A.templateUrl||(y(M)?(Z("new/isolated scope",j||x,A,Y),j=A):Z("new/isolated scope",j,A,Y)),x=x||A),E=A.name,!A.templateUrl&&A.controller&&(M=A.controller,D=D||{},Z("'"+E+"' controller",D[E],A,Y),D[E]=A),(M=A.transclude)&&(H=!0,A.$$tlb||(Z("transclusion",P,A,Y),P=A),"element"==M?(W=!0,V=A.priority,O=Y,Y=s.$$element=Gn(e.createComment(" "+E+": "+s[E]+" ")),a=Y[0],nt(c,U(O),a),Q=N(O,u,V,K&&K.name,{nonTlbTranscludeDirective:P})):(O=Gn(wt(a)).contents(),Y.empty(),Q=N(O,u))),A.template)if(z=!0,Z("template",R,A,Y),R=A,M=S(A.template)?A.template(Y,s):A.template,M=lt(M),A.replace){if(K=A,O=dt(M)?[]:Xt(X(A.templateNamespace,or(M))),a=O[0],1!=O.length||a.nodeType!==fr)throw Fr("tplrt","Template for directive '{0}' must have exactly one root element. {1}",E,"");nt(c,Y,a);var ut={$attr:{}},ct=I(a,[],ut),ft=t.splice(tt+1,t.length-(tt+1));j&&L(ct),t=t.concat(ct).concat(ft),G(s,ut),et=t.length}else Y.html(M);if(A.templateUrl)z=!0,Z("template",R,A,Y),R=A,A.replace&&(K=A),b=J(t.splice(tt,t.length-tt),Y,s,c,H&&Q,f,h,{controllerDirectives:D,newIsolateScopeDirective:j,templateDirective:R,nonTlbTranscludeDirective:P}),et=t.length;else if(A.compile)try{T=A.compile(Y,s,Q),S(T)?$(null,T,rt,st):T&&$(T.pre,T.post,rt,st)}catch(ht){i(ht,B(Y))}A.terminal&&(b.terminal=!0,V=Math.max(V,A.priority))}return b.scope=x&&x.scope===!0,b.transcludeOnThisElement=H,b.elementTranscludeOnThisElement=W,b.templateOnThisElement=z,b.transclude=Q,p.hasElementTranscludeDirective=W,b}function L(t){for(var e=0,n=t.length;n>e;e++)t[e]=p(t[e],{$$isolateScope:!0})}function z(e,r,o,u,c,l,f){if(r===c)return null;var h=null;if(a.hasOwnProperty(r))for(var $,d=t.get(r+s),v=0,m=d.length;m>v;v++)try{$=d[v],(u===n||u>$.priority)&&-1!=$.restrict.indexOf(o)&&(l&&($=p($,{$$start:l,$$end:f})),e.push($),h=$)}catch(g){i(g)}return h}function W(e){if(a.hasOwnProperty(e))for(var n,r=t.get(e+s),i=0,o=r.length;o>i;i++)if(n=r[i],n.multiElement)return!0;return!1}function G(t,e){var n=e.$attr,r=t.$attr,i=t.$$element;o(t,function(r,i){"$"!=i.charAt(0)&&(e[i]&&e[i]!==r&&(r+=("style"===i?";":" ")+e[i]),t.$set(i,r,!0,n[i]))}),o(e,function(e,o){"class"==o?(M(i,e),t["class"]=(t["class"]?t["class"]+" ":"")+e):"style"==o?(i.attr("style",i.attr("style")+";"+e),t.style=(t.style?t.style+";":"")+e):"$"==o.charAt(0)||t.hasOwnProperty(o)||(t[o]=e,r[o]=n[o])})}function J(t,e,n,r,i,a,s,c){var l,h,p=[],$=e[0],d=t.shift(),v=f({},d,{templateUrl:null,transclude:null,replace:null,$$originalDirective:d}),m=S(d.templateUrl)?d.templateUrl(e,n):d.templateUrl,g=d.templateNamespace;
return e.empty(),u(E.getTrustedResourceUrl(m)).then(function(u){var f,w,b,x;if(u=lt(u),d.replace){if(b=dt(u)?[]:Xt(X(g,or(u))),f=b[0],1!=b.length||f.nodeType!==fr)throw Fr("tplrt","Template for directive '{0}' must have exactly one root element. {1}",d.name,m);w={$attr:{}},nt(r,e,f);var S=I(f,[],w);y(d.scope)&&L(S),t=S.concat(t),G(n,w)}else f=$,e.html(u);for(t.unshift(v),l=H(t,f,n,i,e,d,a,s,c),o(r,function(t,n){t==f&&(r[n]=e[0])}),h=R(e[0].childNodes,i);p.length;){var C=p.shift(),A=p.shift(),k=p.shift(),E=p.shift(),O=e[0];if(!C.$$destroyed){if(A!==$){var T=A.className;c.hasElementTranscludeDirective&&d.replace||(O=wt(f)),nt(k,Gn(A),O),M(Gn(O),T)}x=l.transcludeOnThisElement?P(C,l.transclude,E):E,l(h,C,O,r,x)}}p=null}),function(t,e,n,r,i){var o=i;e.$$destroyed||(p?p.push(e,n,r,o):(l.transcludeOnThisElement&&(o=P(e,l.transclude,i)),l(h,e,n,r,o)))}}function Y(t,e){var n=e.priority-t.priority;return 0!==n?n:t.name!==e.name?t.name<e.name?-1:1:t.index-e.index}function Z(t,e,n,r){if(e)throw Fr("multidir","Multiple directives [{0}, {1}] asking for {2} on: {3}",e.name,n.name,t,B(r))}function K(t,e){var n=r(e,!0);n&&t.push({priority:0,compile:function(t){var e=t.parent(),r=!!e.length;return r&&N.$$addBindingClass(e),function(t,e){var i=e.parent();r||N.$$addBindingClass(i),N.$$addBindingInfo(i,n.expressions),t.$watch(n,function(t){e[0].nodeValue=t})}}})}function X(t,n){switch(t=Fn(t||"html")){case"svg":case"math":var r=e.createElement("div");return r.innerHTML="<"+t+">"+n+"</"+t+">",r.childNodes[0].childNodes;default:return n}}function Q(t,e){if("srcdoc"==e)return E.HTML;var n=D(t);return"xlinkHref"==e||"form"==n&&"action"==e||"img"!=n&&("src"==e||"ngSrc"==e)?E.RESOURCE_URL:void 0}function tt(t,e,n,i,o){var a=r(n,!0);if(a){if("multiple"===i&&"select"===D(t))throw Fr("selmulti","Binding to the 'multiple' attribute is not supported. Element: {0}",B(t));e.push({priority:100,compile:function(){return{pre:function(e,n,s){var u=s.$$observers||(s.$$observers={});if(b.test(i))throw Fr("nodomevents","Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");s[i]&&(a=r(s[i],!0,Q(t,i),h[i]||o),a&&(s[i]=a(e),(u[i]||(u[i]=[])).$$inter=!0,(s.$$observers&&s.$$observers[i].$$scope||e).$watch(a,function(t,e){"class"===i&&t!=e?s.$updateClass(t,e):s.$set(i,t)})))}}}})}}function nt(t,n,r){var i,o,a=n[0],s=n.length,u=a.parentNode;if(t)for(i=0,o=t.length;o>i;i++)if(t[i]==a){t[i++]=r;for(var c=i,l=c+s-1,f=t.length;f>c;c++,l++)f>l?t[c]=t[l]:delete t[c];t.length-=s-1,t.context===a&&(t.context=r);break}u&&u.replaceChild(r,a);var h=e.createDocumentFragment();h.appendChild(a),Gn(r).data(Gn(a).data()),Jn?(rr=!0,Jn.cleanData([a])):delete Gn.cache[a[Gn.expando]];for(var p=1,$=n.length;$>p;p++){var d=n[p];Gn(d).remove(),h.appendChild(d),delete n[p]}n[0]=r,n.length=1}function it(t,e){return f(function(){return t.apply(null,arguments)},t,e)}function ot(t,e,n,r,o,a){try{t(e,n,r,o,a)}catch(s){i(s,B(n))}}var at=function(t,e){if(e){var n,r,i,o=Object.keys(e);for(n=0,r=o.length;r>n;n++)i=o[n],this[i]=e[i]}else this.$attr={};this.$$element=t};at.prototype={$normalize:Zt,$addClass:function(t){t&&t.length>0&&O.addClass(this.$$element,t)},$removeClass:function(t){t&&t.length>0&&O.removeClass(this.$$element,t)},$updateClass:function(t,e){var n=Kt(t,e);n&&n.length&&O.addClass(this.$$element,n);var r=Kt(e,t);r&&r.length&&O.removeClass(this.$$element,r)},$set:function(t,e,r,a){var s,u=this.$$element[0],c=Rt(u,t),l=Pt(u,t),f=t;if(c?(this.$$element.prop(t,e),a=c):l&&(this[l]=e,f=l),this[t]=e,a?this.$attr[t]=a:(a=this.$attr[t],a||(this.$attr[t]=a=et(t,"-"))),s=D(this.$$element),"a"===s&&"href"===t||"img"===s&&"src"===t)this[t]=e=T(e,"src"===t);else if("img"===s&&"srcset"===t){for(var h="",p=or(e),$=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,d=/\s/.test(p)?$:/(,)/,v=p.split(d),m=Math.floor(v.length/2),g=0;m>g;g++){var y=2*g;h+=T(or(v[y]),!0),h+=" "+or(v[y+1])}var w=or(v[2*g]).split(/\s/);h+=T(or(w[0]),!0),2===w.length&&(h+=" "+or(w[1])),this[t]=e=h}r!==!1&&(null===e||e===n?this.$$element.removeAttr(a):this.$$element.attr(a,e));var b=this.$$observers;b&&o(b[f],function(t){try{t(e)}catch(n){i(n)}})},$observe:function(t,e){var n=this,r=n.$$observers||(n.$$observers=ut()),i=r[t]||(r[t]=[]);return i.push(e),C.$evalAsync(function(){!i.$$inter&&n.hasOwnProperty(t)&&e(n[t])}),function(){j(i,e)}}};var st=r.startSymbol(),ct=r.endSymbol(),lt="{{"==st||"}}"==ct?d:function(t){return t.replace(/\{\{/g,st).replace(/}}/g,ct)},ft=/^ngAttr[A-Z]/;return N.$$addBindingInfo=x?function(t,e){var n=t.data("$binding")||[];ir(e)?n=n.concat(e):n.push(e),t.data("$binding",n)}:$,N.$$addBindingClass=x?function(t){M(t,"ng-binding")}:$,N.$$addScopeInfo=x?function(t,e,n,r){var i=n?r?"$isolateScopeNoTemplate":"$isolateScope":"$scope";t.data(i,e)}:$,N.$$addScopeClass=x?function(t,e){M(t,e?"ng-isolate-scope":"ng-scope")}:$,N}]}function Zt(t){return $t(t.replace(Hr,""))}function Kt(t,e){var n="",r=t.split(/\s+/),i=e.split(/\s+/);t:for(var o=0;o<r.length;o++){for(var a=r[o],s=0;s<i.length;s++)if(a==i[s])continue t;n+=(n.length>0?" ":"")+a}return n}function Xt(t){t=Gn(t);var e=t.length;if(1>=e)return t;for(;e--;){var n=t[e];n.nodeType===pr&&Kn.call(t,e,1)}return t}function Qt(){var t={},e=!1,i=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(e,n){ot(e,"controller"),y(e)?f(t,e):t[e]=n},this.allowGlobals=function(){e=!0},this.$get=["$injector","$window",function(o,a){function s(t,e,n,i){if(!t||!y(t.$scope))throw r("$controller")("noscp","Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.",i,e);t.$scope[e]=n}return function(r,u,c,l){var h,p,$,d;if(c=c===!0,l&&w(l)&&(d=l),w(r)&&(p=r.match(i),$=p[1],d=d||p[3],r=t.hasOwnProperty($)?t[$]:at(u.$scope,$,!0)||(e?at(a,$,!0):n),it(r,$,!0)),c){var v=(ir(r)?r[r.length-1]:r).prototype;return h=Object.create(v),d&&s(u,d,h,$||r.name),f(function(){return o.invoke(r,h,u,$),h},{instance:h,identifier:d})}return h=o.instantiate(r,u,$),d&&s(u,d,h,$||r.name),h}}]}function te(){this.$get=["$window",function(t){return Gn(t.document)}]}function ee(){this.$get=["$log",function(t){return function(e,n){t.error.apply(t,arguments)}}]}function ne(t,e){if(w(t)){t=t.replace(Gr,"");var n=e("Content-Type");(n&&0===n.indexOf(Lr)&&t.trim()||zr.test(t)&&Wr.test(t))&&(t=L(t))}return t}function re(t){var e,n,r,i=ut();return t?(o(t.split("\n"),function(t){r=t.indexOf(":"),e=Fn(or(t.substr(0,r))),n=or(t.substr(r+1)),e&&(i[e]=i[e]?i[e]+", "+n:n)}),i):i}function ie(t){var e=y(t)?t:n;return function(n){if(e||(e=re(t)),n){var r=e[Fn(n)];return void 0===r&&(r=null),r}return e}}function oe(t,e,n){return S(n)?n(t,e):(o(n,function(n){t=n(t,e)}),t)}function ae(t){return t>=200&&300>t}function se(){var t=this.defaults={transformResponse:[ne],transformRequest:[function(t){return!y(t)||E(t)||O(t)?t:H(t)}],headers:{common:{Accept:"application/json, text/plain, */*"},post:P(Br),put:P(Br),patch:P(Br)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},e=!1;this.useApplyAsync=function(t){return g(t)?(e=!!t,this):e};var i=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,u,c,l,h,p){function $(e){function i(t){var e=f({},t);return t.data?e.data=oe(t.data,t.headers,s.transformResponse):e.data=t.data,ae(t.status)?e:h.reject(e)}function a(e){function n(t){var e;o(t,function(n,r){S(n)&&(e=n(),null!=e?t[r]=e:delete t[r])})}var r,i,a,s=t.headers,u=f({},e.headers);s=f({},s.common,s[Fn(e.method)]);t:for(r in s){i=Fn(r);for(a in u)if(Fn(a)===i)continue t;u[r]=s[r]}return n(u),u}var s={method:"get",transformRequest:t.transformRequest,transformResponse:t.transformResponse},u=a(e);if(!er.isObject(e))throw r("$http")("badreq","Http request configuration must be an object.  Received: {0}",e);f(s,e),s.headers=u,s.method=Ln(s.method);var c=function(e){u=e.headers;var n=oe(e.data,ie(u),e.transformRequest);return m(n)&&o(u,function(t,e){"content-type"===Fn(e)&&delete u[e]}),m(e.withCredentials)&&!m(t.withCredentials)&&(e.withCredentials=t.withCredentials),b(e,n,u).then(i,i)},l=[c,n],p=h.when(s);for(o(k,function(t){(t.request||t.requestError)&&l.unshift(t.request,t.requestError),(t.response||t.responseError)&&l.push(t.response,t.responseError)});l.length;){var $=l.shift(),d=l.shift();p=p.then($,d)}return p.success=function(t){return p.then(function(e){t(e.data,e.status,e.headers,s)}),p},p.error=function(t){return p.then(null,function(e){t(e.data,e.status,e.headers,s)}),p},p}function d(t){o(arguments,function(t){$[t]=function(e,n){return $(f(n||{},{method:t,url:e}))}})}function v(t){o(arguments,function(t){$[t]=function(e,n,r){return $(f(r||{},{method:t,url:e,data:n}))}})}function b(r,i,o){function s(t,n,r,i){function o(){c(n,t,r,i)}p&&(ae(t)?p.put(b,[t,n,re(r),i]):p.remove(b)),e?l.$applyAsync(o):(o(),l.$$phase||l.$apply())}function c(t,e,n,i){e=Math.max(e,0),(ae(e)?v.resolve:v.reject)({data:t,status:e,headers:ie(n),config:r,statusText:i})}function f(){var t=$.pendingRequests.indexOf(r);-1!==t&&$.pendingRequests.splice(t,1)}var p,d,v=h.defer(),w=v.promise,b=C(r.url,r.params);if($.pendingRequests.push(r),w.then(f,f),!r.cache&&!t.cache||r.cache===!1||"GET"!==r.method&&"JSONP"!==r.method||(p=y(r.cache)?r.cache:y(t.cache)?t.cache:A),p)if(d=p.get(b),g(d)){if(M(d))return d.then(f,f),d;ir(d)?c(d[1],d[0],P(d[2]),d[3]):c(d,200,{},"OK")}else p.put(b,w);if(m(d)){var x=tn(r.url)?u.cookies()[r.xsrfCookieName||t.xsrfCookieName]:n;x&&(o[r.xsrfHeaderName||t.xsrfHeaderName]=x),a(r.method,b,i,s,o,r.timeout,r.withCredentials,r.responseType)}return w}function C(t,e){if(!e)return t;var n=[];return s(e,function(t,e){null===t||m(t)||(ir(t)||(t=[t]),o(t,function(t){y(t)&&(t=x(t)?t.toISOString():H(t)),n.push(Y(e)+"="+Y(t))}))}),n.length>0&&(t+=(-1==t.indexOf("?")?"?":"&")+n.join("&")),t}var A=c("$http"),k=[];return o(i,function(t){k.unshift(w(t)?p.get(t):p.invoke(t))}),$.pendingRequests=[],d("get","delete","head","jsonp"),v("post","put","patch"),$.defaults=t,$}]}function ue(){return new t.XMLHttpRequest}function ce(){this.$get=["$browser","$window","$document",function(t,e,n){return le(t,ue,t.defer,e.angular.callbacks,n[0])}]}function le(t,e,n,r,i){function a(t,e,n){var o=i.createElement("script"),a=null;return o.type="text/javascript",o.src=t,o.async=!0,a=function(t){wr(o,"load",a),wr(o,"error",a),i.body.removeChild(o),o=null;var s=-1,u="unknown";t&&("load"!==t.type||r[e].called||(t={type:"error"}),u=t.type,s="error"===t.type?404:200),n&&n(s,u)},yr(o,"load",a),yr(o,"error",a),i.body.appendChild(o),a}return function(i,s,u,c,l,f,h,p){function d(){y&&y(),w&&w.abort()}function v(e,r,i,o,a){S&&n.cancel(S),y=w=null,e(r,i,o,a),t.$$completeOutstandingRequest($)}if(t.$$incOutstandingRequestCount(),s=s||t.url(),"jsonp"==Fn(i)){var m="_"+(r.counter++).toString(36);r[m]=function(t){r[m].data=t,r[m].called=!0};var y=a(s.replace("JSON_CALLBACK","angular.callbacks."+m),m,function(t,e){v(c,t,r[m].data,"",e),r[m]=$})}else{var w=e();w.open(i,s,!0),o(l,function(t,e){g(t)&&w.setRequestHeader(e,t)}),w.onload=function(){var t=w.statusText||"",e="response"in w?w.response:w.responseText,n=1223===w.status?204:w.status;0===n&&(n=e?200:"file"==Qe(s).protocol?404:0),v(c,n,e,w.getAllResponseHeaders(),t)};var b=function(){v(c,-1,null,null,"")};if(w.onerror=b,w.onabort=b,h&&(w.withCredentials=!0),p)try{w.responseType=p}catch(x){if("json"!==p)throw x}w.send(u||null)}if(f>0)var S=n(d,f);else M(f)&&f.then(d)}}function fe(){var t="{{",e="}}";this.startSymbol=function(e){return e?(t=e,this):t},this.endSymbol=function(t){return t?(e=t,this):e},this.$get=["$parse","$exceptionHandler","$sce",function(n,r,i){function o(t){return"\\\\\\"+t}function a(o,a,h,p){function $(n){return n.replace(c,t).replace(l,e)}function d(t){try{return t=T(t),p&&!g(t)?t:M(t)}catch(e){var n=Jr("interr","Can't interpolate: {0}\n{1}",o,e.toString());r(n)}}p=!!p;for(var v,y,w,b=0,x=[],C=[],A=o.length,k=[],E=[];A>b;){if(-1==(v=o.indexOf(t,b))||-1==(y=o.indexOf(e,v+s))){b!==A&&k.push($(o.substring(b)));break}b!==v&&k.push($(o.substring(b,v))),w=o.substring(v+s,y),x.push(w),C.push(n(w,d)),b=y+u,E.push(k.length),k.push("")}if(h&&k.length>1)throw Jr("noconcat","Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce",o);if(!a||x.length){var O=function(t){for(var e=0,n=x.length;n>e;e++){if(p&&m(t[e]))return;k[E[e]]=t[e]}return k.join("")},T=function(t){return h?i.getTrusted(h,t):i.valueOf(t)},M=function(t){if(null==t)return"";switch(typeof t){case"string":break;case"number":t=""+t;break;default:t=H(t)}return t};return f(function(t){var e=0,n=x.length,i=new Array(n);try{for(;n>e;e++)i[e]=C[e](t);return O(i)}catch(a){var s=Jr("interr","Can't interpolate: {0}\n{1}",o,a.toString());r(s)}},{exp:o,expressions:x,$$watchDelegate:function(t,e,n){var r;return t.$watchGroup(C,function(n,i){var o=O(n);S(e)&&e.call(this,o,n!==i?r:o,t),r=o},n)}})}}var s=t.length,u=e.length,c=new RegExp(t.replace(/./g,o),"g"),l=new RegExp(e.replace(/./g,o),"g");return a.startSymbol=function(){return t},a.endSymbol=function(){return e},a}]}function he(){this.$get=["$rootScope","$window","$q","$$q",function(t,e,n,r){function i(i,a,s,u){var c=e.setInterval,l=e.clearInterval,f=0,h=g(u)&&!u,p=(h?r:n).defer(),$=p.promise;return s=g(s)?s:0,$.then(null,null,i),$.$$intervalId=c(function(){p.notify(f++),s>0&&f>=s&&(p.resolve(f),l($.$$intervalId),delete o[$.$$intervalId]),h||t.$apply()},a),o[$.$$intervalId]=p,$}var o={};return i.cancel=function(t){return t&&t.$$intervalId in o?(o[t.$$intervalId].reject("canceled"),e.clearInterval(t.$$intervalId),delete o[t.$$intervalId],!0):!1},i}]}function pe(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"¤",posSuf:"",negPre:"(¤",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),SHORTMONTH:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),DAY:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),SHORTDAY:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(t){return 1===t?"one":"other"}}}}function $e(t){for(var e=t.split("/"),n=e.length;n--;)e[n]=J(e[n]);return e.join("/")}function de(t,e){var n=Qe(t);e.$$protocol=n.protocol,e.$$host=n.hostname,e.$$port=h(n.port)||Zr[n.protocol]||null}function ve(t,e){var n="/"!==t.charAt(0);n&&(t="/"+t);var r=Qe(t);e.$$path=decodeURIComponent(n&&"/"===r.pathname.charAt(0)?r.pathname.substring(1):r.pathname),e.$$search=W(r.search),e.$$hash=decodeURIComponent(r.hash),e.$$path&&"/"!=e.$$path.charAt(0)&&(e.$$path="/"+e.$$path)}function me(t,e){return 0===e.indexOf(t)?e.substr(t.length):void 0}function ge(t){var e=t.indexOf("#");return-1==e?t:t.substr(0,e)}function ye(t){return t.substr(0,ge(t).lastIndexOf("/")+1)}function we(t){return t.substring(0,t.indexOf("/",t.indexOf("//")+2))}function be(t,e){this.$$html5=!0,e=e||"";var r=ye(t);de(t,this),this.$$parse=function(t){var e=me(r,t);if(!w(e))throw Kr("ipthprfx",'Invalid url "{0}", missing path prefix "{1}".',t,r);ve(e,this),this.$$path||(this.$$path="/"),this.$$compose()},this.$$compose=function(){var t=G(this.$$search),e=this.$$hash?"#"+J(this.$$hash):"";this.$$url=$e(this.$$path)+(t?"?"+t:"")+e,this.$$absUrl=r+this.$$url.substr(1)},this.$$parseLinkUrl=function(i,o){if(o&&"#"===o[0])return this.hash(o.slice(1)),!0;var a,s,u;return(a=me(t,i))!==n?(s=a,u=(a=me(e,a))!==n?r+(me("/",a)||a):t+s):(a=me(r,i))!==n?u=r+a:r==i+"/"&&(u=r),u&&this.$$parse(u),!!u}}function xe(t,e){var n=ye(t);de(t,this),this.$$parse=function(r){function i(t,e,n){var r,i=/^\/[A-Z]:(\/.*)/;return 0===e.indexOf(n)&&(e=e.replace(n,"")),i.exec(e)?t:(r=i.exec(t),r?r[1]:t)}var o=me(t,r)||me(n,r),a="#"==o.charAt(0)?me(e,o):this.$$html5?o:"";if(!w(a))throw Kr("ihshprfx",'Invalid url "{0}", missing hash prefix "{1}".',r,e);ve(a,this),this.$$path=i(this.$$path,a,t),this.$$compose()},this.$$compose=function(){var n=G(this.$$search),r=this.$$hash?"#"+J(this.$$hash):"";this.$$url=$e(this.$$path)+(n?"?"+n:"")+r,this.$$absUrl=t+(this.$$url?e+this.$$url:"")},this.$$parseLinkUrl=function(e,n){return ge(t)==ge(e)?(this.$$parse(e),!0):!1}}function Se(t,e){this.$$html5=!0,xe.apply(this,arguments);var n=ye(t);this.$$parseLinkUrl=function(r,i){if(i&&"#"===i[0])return this.hash(i.slice(1)),!0;var o,a;return t==ge(r)?o=r:(a=me(n,r))?o=t+e+a:n===r+"/"&&(o=n),o&&this.$$parse(o),!!o},this.$$compose=function(){var n=G(this.$$search),r=this.$$hash?"#"+J(this.$$hash):"";this.$$url=$e(this.$$path)+(n?"?"+n:"")+r,this.$$absUrl=t+e+this.$$url}}function Ce(t){return function(){return this[t]}}function Ae(t,e){return function(n){return m(n)?this[t]:(this[t]=e(n),this.$$compose(),this)}}function ke(){var e="",n={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(t){return g(t)?(e=t,this):e},this.html5Mode=function(t){return T(t)?(n.enabled=t,this):y(t)?(T(t.enabled)&&(n.enabled=t.enabled),T(t.requireBase)&&(n.requireBase=t.requireBase),T(t.rewriteLinks)&&(n.rewriteLinks=t.rewriteLinks),this):n},this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(r,i,o,a){function s(t,e,n){var r=c.url(),o=c.$$state;try{i.url(t,e,n),c.$$state=i.state()}catch(a){throw c.url(r),c.$$state=o,a}}function u(t,e){r.$broadcast("$locationChangeSuccess",c.absUrl(),t,c.$$state,e)}var c,l,f,h=i.baseHref(),p=i.url();if(n.enabled){if(!h&&n.requireBase)throw Kr("nobase","$location in HTML5 mode requires a <base> tag to be present!");f=we(p)+(h||"/"),l=o.history?be:Se}else f=ge(p),l=xe;c=new l(f,"#"+e),c.$$parseLinkUrl(p,p),c.$$state=i.state();var $=/^\s*(javascript|mailto):/i;a.on("click",function(e){if(n.rewriteLinks&&!e.ctrlKey&&!e.metaKey&&2!=e.which){for(var o=Gn(e.target);"a"!==D(o[0]);)if(o[0]===a[0]||!(o=o.parent())[0])return;var s=o.prop("href"),u=o.attr("href")||o.attr("xlink:href");y(s)&&"[object SVGAnimatedString]"===s.toString()&&(s=Qe(s.animVal).href),$.test(s)||!s||o.attr("target")||e.isDefaultPrevented()||c.$$parseLinkUrl(s,u)&&(e.preventDefault(),c.absUrl()!=i.url()&&(r.$apply(),t.angular["ff-684208-preventDefault"]=!0))}}),c.absUrl()!=p&&i.url(c.absUrl(),!0);var d=!0;return i.onUrlChange(function(t,e){r.$evalAsync(function(){var n,i=c.absUrl(),o=c.$$state;c.$$parse(t),c.$$state=e,n=r.$broadcast("$locationChangeStart",t,i,e,o).defaultPrevented,c.absUrl()===t&&(n?(c.$$parse(i),c.$$state=o,s(i,!1,o)):(d=!1,u(i,o)))}),r.$$phase||r.$digest()}),r.$watch(function(){var t=i.url(),e=i.state(),n=c.$$replace,a=t!==c.absUrl()||c.$$html5&&o.history&&e!==c.$$state;(d||a)&&(d=!1,r.$evalAsync(function(){var i=c.absUrl(),o=r.$broadcast("$locationChangeStart",i,t,c.$$state,e).defaultPrevented;c.absUrl()===i&&(o?(c.$$parse(t),c.$$state=e):(a&&s(i,n,e===c.$$state?null:c.$$state),u(t,e)))})),c.$$replace=!1}),c}]}function Ee(){var t=!0,e=this;this.debugEnabled=function(e){return g(e)?(t=e,this):t},this.$get=["$window",function(n){function r(t){return t instanceof Error&&(t.stack?t=t.message&&-1===t.stack.indexOf(t.message)?"Error: "+t.message+"\n"+t.stack:t.stack:t.sourceURL&&(t=t.message+"\n"+t.sourceURL+":"+t.line)),t}function i(t){var e=n.console||{},i=e[t]||e.log||$,a=!1;try{a=!!i.apply}catch(s){}return a?function(){var t=[];return o(arguments,function(e){t.push(r(e))}),i.apply(e,t)}:function(t,e){i(t,null==e?"":e)}}return{log:i("log"),info:i("info"),warn:i("warn"),error:i("error"),debug:function(){var n=i("debug");return function(){t&&n.apply(e,arguments)}}()}}]}function Oe(t,e){if("__defineGetter__"===t||"__defineSetter__"===t||"__lookupGetter__"===t||"__lookupSetter__"===t||"__proto__"===t)throw Qr("isecfld","Attempting to access a disallowed field in Angular expressions! Expression: {0}",e);return t}function Te(t,e){if(t){if(t.constructor===t)throw Qr("isecfn","Referencing Function in Angular expressions is disallowed! Expression: {0}",e);if(t.window===t)throw Qr("isecwindow","Referencing the Window in Angular expressions is disallowed! Expression: {0}",e);if(t.children&&(t.nodeName||t.prop&&t.attr&&t.find))throw Qr("isecdom","Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}",e);if(t===Object)throw Qr("isecobj","Referencing Object in Angular expressions is disallowed! Expression: {0}",e)}return t}function Me(t,e){if(t){if(t.constructor===t)throw Qr("isecfn","Referencing Function in Angular expressions is disallowed! Expression: {0}",e);if(t===ti||t===ei||t===ni)throw Qr("isecff","Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}",e)}}function Ne(t){return t.constant}function Ve(t,e,n,r){Te(t,r);for(var i,o=e.split("."),a=0;o.length>1;a++){i=Oe(o.shift(),r);var s=Te(t[i],r);s||(s={},t[i]=s),t=s}return i=Oe(o.shift(),r),Te(t[i],r),t[i]=n,n}function De(t){return"constructor"==t}function je(t,e,r,i,o,a,s){Oe(t,a),Oe(e,a),Oe(r,a),Oe(i,a),Oe(o,a);var u=function(t){return Te(t,a)},c=s||De(t)?u:d,l=s||De(e)?u:d,f=s||De(r)?u:d,h=s||De(i)?u:d,p=s||De(o)?u:d;return function(a,s){var u=s&&s.hasOwnProperty(t)?s:a;return null==u?u:(u=c(u[t]),e?null==u?n:(u=l(u[e]),r?null==u?n:(u=f(u[r]),i?null==u?n:(u=h(u[i]),o?null==u?n:u=p(u[o]):u):u):u):u)}}function Re(t,e){return function(n,r){return t(n,r,Te,e)}}function Pe(t,e,r){var i=e.expensiveChecks,a=i?ci:ui,s=a[t];if(s)return s;var u=t.split("."),c=u.length;if(e.csp)s=6>c?je(u[0],u[1],u[2],u[3],u[4],r,i):function(t,e){var o,a=0;do o=je(u[a++],u[a++],u[a++],u[a++],u[a++],r,i)(t,e),e=n,t=o;while(c>a);return o};else{var l="";i&&(l+="s = eso(s, fe);\nl = eso(l, fe);\n");var f=i;o(u,function(t,e){Oe(t,r);var n=(e?"s":'((l&&l.hasOwnProperty("'+t+'"))?l:s)')+"."+t;(i||De(t))&&(n="eso("+n+", fe)",f=!0),l+="if(s == null) return undefined;\ns="+n+";\n"}),l+="return s;";var h=new Function("s","l","eso","fe",l);h.toString=v(l),f&&(h=Re(h,r)),s=h}return s.sharedGetter=!0,s.assign=function(e,n){return Ve(e,t,n,t)},a[t]=s,s}function qe(t){return S(t.valueOf)?t.valueOf():li.call(t)}function Ie(){var t=ut(),e=ut();this.$get=["$filter","$sniffer",function(n,r){function i(t){var e=t;return t.sharedGetter&&(e=function(e,n){return t(e,n)},e.literal=t.literal,e.constant=t.constant,e.assign=t.assign),e}function a(t,e){for(var n=0,r=t.length;r>n;n++){var i=t[n];i.constant||(i.inputs?a(i.inputs,e):-1===e.indexOf(i)&&e.push(i))}return e}function s(t,e){return null==t||null==e?t===e:"object"==typeof t&&(t=qe(t),"object"==typeof t)?!1:t===e||t!==t&&e!==e}function u(t,e,n,r){var i,o=r.$$inputs||(r.$$inputs=a(r.inputs,[]));if(1===o.length){var u=s;return o=o[0],t.$watch(function(t){var e=o(t);return s(e,u)||(i=r(t),u=e&&qe(e)),i},e,n)}for(var c=[],l=0,f=o.length;f>l;l++)c[l]=s;return t.$watch(function(t){for(var e=!1,n=0,a=o.length;a>n;n++){var u=o[n](t);(e||(e=!s(u,c[n])))&&(c[n]=u&&qe(u))}return e&&(i=r(t)),i},e,n)}function c(t,e,n,r){var i,o;return i=t.$watch(function(t){return r(t)},function(t,n,r){o=t,S(e)&&e.apply(this,arguments),g(t)&&r.$$postDigest(function(){g(o)&&i()})},n)}function l(t,e,n,r){function i(t){var e=!0;return o(t,function(t){g(t)||(e=!1)}),e}var a,s;return a=t.$watch(function(t){return r(t)},function(t,n,r){s=t,S(e)&&e.call(this,t,n,r),i(t)&&r.$$postDigest(function(){i(s)&&a()})},n)}function f(t,e,n,r){var i;return i=t.$watch(function(t){return r(t)},function(t,n,r){S(e)&&e.apply(this,arguments),i()},n)}function h(t,e){if(!e)return t;var n=t.$$watchDelegate,r=n!==l&&n!==c,i=r?function(n,r){var i=t(n,r);return e(i,n,r)}:function(n,r){var i=t(n,r),o=e(i,n,r);return g(i)?o:i};return t.$$watchDelegate&&t.$$watchDelegate!==u?i.$$watchDelegate=t.$$watchDelegate:e.$stateful||(i.$$watchDelegate=u,i.inputs=[t]),i}var p={csp:r.csp,expensiveChecks:!1},d={csp:r.csp,expensiveChecks:!0};return function(r,o,a){var s,v,m;switch(typeof r){case"string":m=r=r.trim();var g=a?e:t;if(s=g[m],!s){":"===r.charAt(0)&&":"===r.charAt(1)&&(v=!0,r=r.substring(2));var y=a?d:p,w=new ai(y),b=new si(w,n,y);s=b.parse(r),s.constant?s.$$watchDelegate=f:v?(s=i(s),s.$$watchDelegate=s.literal?l:c):s.inputs&&(s.$$watchDelegate=u),g[m]=s}return h(s,o);case"function":return h(r,o);default:return h($,o)}}}]}function Ue(){this.$get=["$rootScope","$exceptionHandler",function(t,e){return Fe(function(e){t.$evalAsync(e)},e)}]}function _e(){this.$get=["$browser","$exceptionHandler",function(t,e){return Fe(function(e){t.defer(e)},e)}]}function Fe(t,e){function i(t,e,n){function r(e){return function(n){i||(i=!0,e.call(t,n))}}var i=!1;return[r(e),r(n)]}function a(){this.$$state={status:0}}function s(t,e){return function(n){e.call(t,n)}}function u(t){var r,i,o;o=t.pending,t.processScheduled=!1,t.pending=n;for(var a=0,s=o.length;s>a;++a){i=o[a][0],r=o[a][t.status];try{S(r)?i.resolve(r(t.value)):1===t.status?i.resolve(t.value):i.reject(t.value)}catch(u){i.reject(u),e(u)}}}function c(e){!e.processScheduled&&e.pending&&(e.processScheduled=!0,t(function(){u(e)}))}function l(){this.promise=new a,this.resolve=s(this,this.resolve),this.reject=s(this,this.reject),this.notify=s(this,this.notify)}function f(t){var e=new l,n=0,r=ir(t)?[]:{};return o(t,function(t,i){n++,m(t).then(function(t){r.hasOwnProperty(i)||(r[i]=t,--n||e.resolve(r))},function(t){r.hasOwnProperty(i)||e.reject(t)})}),0===n&&e.resolve(r),e.promise}var h=r("$q",TypeError),p=function(){return new l};a.prototype={then:function(t,e,n){var r=new l;return this.$$state.pending=this.$$state.pending||[],this.$$state.pending.push([r,t,e,n]),this.$$state.status>0&&c(this.$$state),r.promise},"catch":function(t){return this.then(null,t)},"finally":function(t,e){return this.then(function(e){return v(e,!0,t)},function(e){return v(e,!1,t)},e)}},l.prototype={resolve:function(t){this.promise.$$state.status||(t===this.promise?this.$$reject(h("qcycle","Expected promise to be resolved with value other than itself '{0}'",t)):this.$$resolve(t))},$$resolve:function(t){var n,r;r=i(this,this.$$resolve,this.$$reject);try{(y(t)||S(t))&&(n=t&&t.then),S(n)?(this.promise.$$state.status=-1,n.call(t,r[0],r[1],this.notify)):(this.promise.$$state.value=t,this.promise.$$state.status=1,c(this.promise.$$state))}catch(o){r[1](o),e(o)}},reject:function(t){this.promise.$$state.status||this.$$reject(t)},$$reject:function(t){this.promise.$$state.value=t,this.promise.$$state.status=2,c(this.promise.$$state)},notify:function(n){var r=this.promise.$$state.pending;this.promise.$$state.status<=0&&r&&r.length&&t(function(){for(var t,i,o=0,a=r.length;a>o;o++){i=r[o][0],t=r[o][3];try{i.notify(S(t)?t(n):n)}catch(s){e(s)}}})}};var $=function(t){var e=new l;return e.reject(t),e.promise},d=function(t,e){var n=new l;return e?n.resolve(t):n.reject(t),n.promise},v=function(t,e,n){var r=null;try{S(n)&&(r=n())}catch(i){return d(i,!1)}return M(r)?r.then(function(){return d(t,e)},function(t){return d(t,!1)}):d(t,e)},m=function(t,e,n,r){var i=new l;return i.resolve(t),i.promise.then(e,n,r)},g=function w(t){function e(t){r.resolve(t)}function n(t){r.reject(t)}if(!S(t))throw h("norslvr","Expected resolverFn, got '{0}'",t);if(!(this instanceof w))return new w(t);var r=new l;return t(e,n),r.promise};return g.defer=p,g.reject=$,g.when=m,g.all=f,g}function He(){this.$get=["$window","$timeout",function(t,e){var n=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame,r=t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.webkitCancelRequestAnimationFrame,i=!!n,o=i?function(t){var e=n(t);return function(){r(e)}}:function(t){var n=e(t,16.66,!1);return function(){e.cancel(n)}};return o.supported=i,o}]}function Le(){var t=10,e=r("$rootScope"),n=null,a=null;this.digestTtl=function(e){return arguments.length&&(t=e),t},this.$get=["$injector","$exceptionHandler","$parse","$browser",function(r,s,u,l){function f(){this.$id=c(),this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null,this.$root=this,this.$$destroyed=!1,this.$$listeners={},this.$$listenerCount={},this.$$isolateBindings=null}function h(t){if(b.$$phase)throw e("inprog","{0} already in progress",b.$$phase);b.$$phase=t}function p(){b.$$phase=null}function d(t,e,n){do t.$$listenerCount[n]-=e,0===t.$$listenerCount[n]&&delete t.$$listenerCount[n];while(t=t.$parent)}function v(){}function g(){for(;A.length;)try{A.shift()()}catch(t){s(t)}a=null}function w(){null===a&&(a=l.defer(function(){b.$apply(g)}))}f.prototype={constructor:f,$new:function(t,e){function n(){r.$$destroyed=!0}var r;return e=e||this,t?(r=new f,r.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null,this.$$listeners={},this.$$listenerCount={},this.$id=c(),this.$$ChildScope=null},this.$$ChildScope.prototype=this),r=new this.$$ChildScope),r.$parent=e,r.$$prevSibling=e.$$childTail,e.$$childHead?(e.$$childTail.$$nextSibling=r,e.$$childTail=r):e.$$childHead=e.$$childTail=r,(t||e!=this)&&r.$on("$destroy",n),r},$watch:function(t,e,r){var i=u(t);if(i.$$watchDelegate)return i.$$watchDelegate(this,e,r,i);var o=this,a=o.$$watchers,s={fn:e,last:v,get:i,exp:t,eq:!!r};return n=null,S(e)||(s.fn=$),a||(a=o.$$watchers=[]),a.unshift(s),function(){j(a,s),n=null}},$watchGroup:function(t,e){function n(){u=!1,c?(c=!1,e(i,i,s)):e(i,r,s)}var r=new Array(t.length),i=new Array(t.length),a=[],s=this,u=!1,c=!0;if(!t.length){var l=!0;return s.$evalAsync(function(){l&&e(i,i,s)}),function(){l=!1}}return 1===t.length?this.$watch(t[0],function(t,n,o){i[0]=t,r[0]=n,e(i,t===n?i:r,o)}):(o(t,function(t,e){var o=s.$watch(t,function(t,o){i[e]=t,r[e]=o,u||(u=!0,s.$evalAsync(n))});a.push(o)}),function(){for(;a.length;)a.shift()()})},$watchCollection:function(t,e){function n(t){o=t;var e,n,r,s,u;if(!m(o)){if(y(o))if(i(o)){a!==p&&(a=p,v=a.length=0,f++),e=o.length,v!==e&&(f++,a.length=v=e);for(var c=0;e>c;c++)u=a[c],s=o[c],r=u!==u&&s!==s,r||u===s||(f++,a[c]=s)}else{a!==$&&(a=$={},v=0,f++),e=0;for(n in o)o.hasOwnProperty(n)&&(e++,s=o[n],u=a[n],n in a?(r=u!==u&&s!==s,r||u===s||(f++,a[n]=s)):(v++,a[n]=s,f++));if(v>e){f++;for(n in a)o.hasOwnProperty(n)||(v--,delete a[n])}}else a!==o&&(a=o,f++);return f}}function r(){if(d?(d=!1,e(o,o,c)):e(o,s,c),l)if(y(o))if(i(o)){s=new Array(o.length);for(var t=0;t<o.length;t++)s[t]=o[t]}else{s={};for(var n in o)Hn.call(o,n)&&(s[n]=o[n])}else s=o}n.$stateful=!0;var o,a,s,c=this,l=e.length>1,f=0,h=u(t,n),p=[],$={},d=!0,v=0;return this.$watch(h,r)},$digest:function(){var r,i,o,u,c,f,$,d,m,y,w=t,A=this,k=[];h("$digest"),l.$$checkUrlChange(),this===b&&null!==a&&(l.defer.cancel(a),g()),n=null;do{for(f=!1,d=A;x.length;){try{y=x.shift(),y.scope.$eval(y.expression)}catch(E){s(E)}n=null}t:do{if(u=d.$$watchers)for(c=u.length;c--;)try{if(r=u[c])if((i=r.get(d))===(o=r.last)||(r.eq?q(i,o):"number"==typeof i&&"number"==typeof o&&isNaN(i)&&isNaN(o))){if(r===n){f=!1;break t}}else f=!0,n=r,r.last=r.eq?R(i,null):i,r.fn(i,o===v?i:o,d),5>w&&(m=4-w,k[m]||(k[m]=[]),k[m].push({msg:S(r.exp)?"fn: "+(r.exp.name||r.exp.toString()):r.exp,newVal:i,oldVal:o}))}catch(E){s(E)}if(!($=d.$$childHead||d!==A&&d.$$nextSibling))for(;d!==A&&!($=d.$$nextSibling);)d=d.$parent}while(d=$);if((f||x.length)&&!w--)throw p(),e("infdig","{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}",t,k)}while(f||x.length);for(p();C.length;)try{C.shift()()}catch(E){s(E)}},$destroy:function(){if(!this.$$destroyed){var t=this.$parent;if(this.$broadcast("$destroy"),this.$$destroyed=!0,this!==b){for(var e in this.$$listenerCount)d(this,this.$$listenerCount[e],e);t.$$childHead==this&&(t.$$childHead=this.$$nextSibling),t.$$childTail==this&&(t.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),
this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=$,this.$on=this.$watch=this.$watchGroup=function(){return $},this.$$listeners={},this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}}},$eval:function(t,e){return u(t)(this,e)},$evalAsync:function(t){b.$$phase||x.length||l.defer(function(){x.length&&b.$digest()}),x.push({scope:this,expression:t})},$$postDigest:function(t){C.push(t)},$apply:function(t){try{return h("$apply"),this.$eval(t)}catch(e){s(e)}finally{p();try{b.$digest()}catch(e){throw s(e),e}}},$applyAsync:function(t){function e(){n.$eval(t)}var n=this;t&&A.push(e),w()},$on:function(t,e){var n=this.$$listeners[t];n||(this.$$listeners[t]=n=[]),n.push(e);var r=this;do r.$$listenerCount[t]||(r.$$listenerCount[t]=0),r.$$listenerCount[t]++;while(r=r.$parent);var i=this;return function(){var r=n.indexOf(e);-1!==r&&(n[r]=null,d(i,1,t))}},$emit:function(t,e){var n,r,i,o=[],a=this,u=!1,c={name:t,targetScope:a,stopPropagation:function(){u=!0},preventDefault:function(){c.defaultPrevented=!0},defaultPrevented:!1},l=I([c],arguments,1);do{for(n=a.$$listeners[t]||o,c.currentScope=a,r=0,i=n.length;i>r;r++)if(n[r])try{n[r].apply(null,l)}catch(f){s(f)}else n.splice(r,1),r--,i--;if(u)return c.currentScope=null,c;a=a.$parent}while(a);return c.currentScope=null,c},$broadcast:function(t,e){var n=this,r=n,i=n,o={name:t,targetScope:n,preventDefault:function(){o.defaultPrevented=!0},defaultPrevented:!1};if(!n.$$listenerCount[t])return o;for(var a,u,c,l=I([o],arguments,1);r=i;){for(o.currentScope=r,a=r.$$listeners[t]||[],u=0,c=a.length;c>u;u++)if(a[u])try{a[u].apply(null,l)}catch(f){s(f)}else a.splice(u,1),u--,c--;if(!(i=r.$$listenerCount[t]&&r.$$childHead||r!==n&&r.$$nextSibling))for(;r!==n&&!(i=r.$$nextSibling);)r=r.$parent}return o.currentScope=null,o}};var b=new f,x=b.$$asyncQueue=[],C=b.$$postDigestQueue=[],A=b.$$applyAsyncQueue=[];return b}]}function Be(){var t=/^\s*(https?|ftp|mailto|tel|file):/,e=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(e){return g(e)?(t=e,this):t},this.imgSrcSanitizationWhitelist=function(t){return g(t)?(e=t,this):e},this.$get=function(){return function(n,r){var i,o=r?e:t;return i=Qe(n).href,""===i||i.match(o)?n:"unsafe:"+i}}}function ze(t){if("self"===t)return t;if(w(t)){if(t.indexOf("***")>-1)throw fi("iwcard","Illegal sequence *** in string matcher.  String: {0}",t);return t=ar(t).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*"),new RegExp("^"+t+"$")}if(C(t))return new RegExp("^"+t.source+"$");throw fi("imatcher",'Matchers may only be "self", string patterns or RegExp objects')}function We(t){var e=[];return g(t)&&o(t,function(t){e.push(ze(t))}),e}function Ge(){this.SCE_CONTEXTS=hi;var t=["self"],e=[];this.resourceUrlWhitelist=function(e){return arguments.length&&(t=We(e)),t},this.resourceUrlBlacklist=function(t){return arguments.length&&(e=We(t)),e},this.$get=["$injector",function(r){function i(t,e){return"self"===t?tn(e):!!t.exec(e.href)}function o(n){var r,o,a=Qe(n.toString()),s=!1;for(r=0,o=t.length;o>r;r++)if(i(t[r],a)){s=!0;break}if(s)for(r=0,o=e.length;o>r;r++)if(i(e[r],a)){s=!1;break}return s}function a(t){var e=function(t){this.$$unwrapTrustedValue=function(){return t}};return t&&(e.prototype=new t),e.prototype.valueOf=function(){return this.$$unwrapTrustedValue()},e.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()},e}function s(t,e){var r=h.hasOwnProperty(t)?h[t]:null;if(!r)throw fi("icontext","Attempted to trust a value in invalid context. Context: {0}; Value: {1}",t,e);if(null===e||e===n||""===e)return e;if("string"!=typeof e)throw fi("itype","Attempted to trust a non-string value in a content requiring a string: Context: {0}",t);return new r(e)}function u(t){return t instanceof f?t.$$unwrapTrustedValue():t}function c(t,e){if(null===e||e===n||""===e)return e;var r=h.hasOwnProperty(t)?h[t]:null;if(r&&e instanceof r)return e.$$unwrapTrustedValue();if(t===hi.RESOURCE_URL){if(o(e))return e;throw fi("insecurl","Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}",e.toString())}if(t===hi.HTML)return l(e);throw fi("unsafe","Attempting to use an unsafe value in a safe context.")}var l=function(t){throw fi("unsafe","Attempting to use an unsafe value in a safe context.")};r.has("$sanitize")&&(l=r.get("$sanitize"));var f=a(),h={};return h[hi.HTML]=a(f),h[hi.CSS]=a(f),h[hi.URL]=a(f),h[hi.JS]=a(f),h[hi.RESOURCE_URL]=a(h[hi.URL]),{trustAs:s,getTrusted:c,valueOf:u}}]}function Je(){var t=!0;this.enabled=function(e){return arguments.length&&(t=!!e),t},this.$get=["$parse","$sceDelegate",function(e,n){if(t&&8>Wn)throw fi("iequirks","Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");var r=P(hi);r.isEnabled=function(){return t},r.trustAs=n.trustAs,r.getTrusted=n.getTrusted,r.valueOf=n.valueOf,t||(r.trustAs=r.getTrusted=function(t,e){return e},r.valueOf=d),r.parseAs=function(t,n){var i=e(n);return i.literal&&i.constant?i:e(n,function(e){return r.getTrusted(t,e)})};var i=r.parseAs,a=r.getTrusted,s=r.trustAs;return o(hi,function(t,e){var n=Fn(e);r[$t("parse_as_"+n)]=function(e){return i(t,e)},r[$t("get_trusted_"+n)]=function(e){return a(t,e)},r[$t("trust_as_"+n)]=function(e){return s(t,e)}}),r}]}function Ye(){this.$get=["$window","$document",function(t,e){var n,r,i={},o=h((/android (\d+)/.exec(Fn((t.navigator||{}).userAgent))||[])[1]),a=/Boxee/i.test((t.navigator||{}).userAgent),s=e[0]||{},u=/^(Moz|webkit|ms)(?=[A-Z])/,c=s.body&&s.body.style,l=!1,f=!1;if(c){for(var p in c)if(r=u.exec(p)){n=r[0],n=n.substr(0,1).toUpperCase()+n.substr(1);break}n||(n="WebkitOpacity"in c&&"webkit"),l=!!("transition"in c||n+"Transition"in c),f=!!("animation"in c||n+"Animation"in c),!o||l&&f||(l=w(s.body.style.webkitTransition),f=w(s.body.style.webkitAnimation))}return{history:!(!t.history||!t.history.pushState||4>o||a),hasEvent:function(t){if("input"==t&&9==Wn)return!1;if(m(i[t])){var e=s.createElement("div");i[t]="on"+t in e}return i[t]},csp:sr(),vendorPrefix:n,transitions:l,animations:f,android:o}}]}function Ze(){this.$get=["$templateCache","$http","$q",function(t,e,n){function r(i,o){function a(){if(s.totalPendingRequests--,!o)throw Fr("tpload","Failed to load template: {0}",i);return n.reject()}var s=r;s.totalPendingRequests++;var u=e.defaults&&e.defaults.transformResponse;if(ir(u)){var c=u;u=[];for(var l=0;l<c.length;++l){var f=c[l];f!==ne&&u.push(f)}}else u===ne&&(u=null);var h={cache:t,transformResponse:u};return e.get(i,h).then(function(e){var n=e.data;return s.totalPendingRequests--,t.put(i,n),n},a)}return r.totalPendingRequests=0,r}]}function Ke(){this.$get=["$rootScope","$browser","$location",function(t,e,n){var r={};return r.findBindings=function(t,e,n){var r=t.getElementsByClassName("ng-binding"),i=[];return o(r,function(t){var r=er.element(t).data("$binding");r&&o(r,function(r){if(n){var o=new RegExp("(^|\\s)"+ar(e)+"(\\s|\\||$)");o.test(r)&&i.push(t)}else-1!=r.indexOf(e)&&i.push(t)})}),i},r.findModels=function(t,e,n){for(var r=["ng-","data-ng-","ng\\:"],i=0;i<r.length;++i){var o=n?"=":"*=",a="["+r[i]+"model"+o+'"'+e+'"]',s=t.querySelectorAll(a);if(s.length)return s}},r.getLocation=function(){return n.url()},r.setLocation=function(e){e!==n.url()&&(n.url(e),t.$digest())},r.whenStable=function(t){e.notifyWhenNoOutstandingRequests(t)},r}]}function Xe(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(t,e,n,r,i){function o(o,s,u){var c,l=g(u)&&!u,f=(l?r:n).defer(),h=f.promise;return c=e.defer(function(){try{f.resolve(o())}catch(e){f.reject(e),i(e)}finally{delete a[h.$$timeoutId]}l||t.$apply()},s),h.$$timeoutId=c,a[c]=f,h}var a={};return o.cancel=function(t){return t&&t.$$timeoutId in a?(a[t.$$timeoutId].reject("canceled"),delete a[t.$$timeoutId],e.defer.cancel(t.$$timeoutId)):!1},o}]}function Qe(t){var e=t;return Wn&&(pi.setAttribute("href",e),e=pi.href),pi.setAttribute("href",e),{href:pi.href,protocol:pi.protocol?pi.protocol.replace(/:$/,""):"",host:pi.host,search:pi.search?pi.search.replace(/^\?/,""):"",hash:pi.hash?pi.hash.replace(/^#/,""):"",hostname:pi.hostname,port:pi.port,pathname:"/"===pi.pathname.charAt(0)?pi.pathname:"/"+pi.pathname}}function tn(t){var e=w(t)?Qe(t):t;return e.protocol===$i.protocol&&e.host===$i.host}function en(){this.$get=v(t)}function nn(t){function e(r,i){if(y(r)){var a={};return o(r,function(t,n){a[n]=e(n,t)}),a}return t.factory(r+n,i)}var n="Filter";this.register=e,this.$get=["$injector",function(t){return function(e){return t.get(e+n)}}],e("currency",on),e("date",vn),e("filter",rn),e("json",mn),e("limitTo",gn),e("lowercase",yi),e("number",an),e("orderBy",yn),e("uppercase",wi)}function rn(){return function(t,e,n){if(!ir(t))return t;var r=typeof n,i=[];i.check=function(t,e){for(var n=0;n<i.length;n++)if(!i[n](t,e))return!1;return!0},"function"!==r&&(n="boolean"===r&&n?function(t,e){return er.equals(t,e)}:function(t,e){if(t&&e&&"object"==typeof t&&"object"==typeof e){for(var r in t)if("$"!==r.charAt(0)&&Hn.call(t,r)&&n(t[r],e[r]))return!0;return!1}return e=(""+e).toLowerCase(),(""+t).toLowerCase().indexOf(e)>-1});var o=function(t,e){if("string"==typeof e&&"!"===e.charAt(0))return!o(t,e.substr(1));switch(typeof t){case"boolean":case"number":case"string":return n(t,e);case"object":switch(typeof e){case"object":return n(t,e);default:for(var r in t)if("$"!==r.charAt(0)&&o(t[r],e))return!0}return!1;case"array":for(var i=0;i<t.length;i++)if(o(t[i],e))return!0;return!1;default:return!1}};switch(typeof e){case"boolean":case"number":case"string":e={$:e};case"object":for(var a in e)!function(t){"undefined"!=typeof e[t]&&i.push(function(n){return o("$"==t?n:n&&n[t],e[t])})}(a);break;case"function":i.push(e);break;default:return t}for(var s=[],u=0;u<t.length;u++){var c=t[u];i.check(c,u)&&s.push(c)}return s}}function on(t){var e=t.NUMBER_FORMATS;return function(t,n,r){return m(n)&&(n=e.CURRENCY_SYM),m(r)&&(r=e.PATTERNS[1].maxFrac),null==t?t:sn(t,e.PATTERNS[1],e.GROUP_SEP,e.DECIMAL_SEP,r).replace(/\u00A4/g,n)}}function an(t){var e=t.NUMBER_FORMATS;return function(t,n){return null==t?t:sn(t,e.PATTERNS[0],e.GROUP_SEP,e.DECIMAL_SEP,n)}}function sn(t,e,n,r,i){if(!isFinite(t)||y(t))return"";var o=0>t;t=Math.abs(t);var a=t+"",s="",u=[],c=!1;if(-1!==a.indexOf("e")){var l=a.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&l[3]>i+1?(a="0",t=0):(s=a,c=!0)}if(c)i>0&&t>-1&&1>t&&(s=t.toFixed(i));else{var f=(a.split(di)[1]||"").length;m(i)&&(i=Math.min(Math.max(e.minFrac,f),e.maxFrac)),t=+(Math.round(+(t.toString()+"e"+i)).toString()+"e"+-i),0===t&&(o=!1);var h=(""+t).split(di),p=h[0];h=h[1]||"";var $,d=0,v=e.lgSize,g=e.gSize;if(p.length>=v+g)for(d=p.length-v,$=0;d>$;$++)(d-$)%g===0&&0!==$&&(s+=n),s+=p.charAt($);for($=d;$<p.length;$++)(p.length-$)%v===0&&0!==$&&(s+=n),s+=p.charAt($);for(;h.length<i;)h+="0";i&&"0"!==i&&(s+=r+h.substr(0,i))}return u.push(o?e.negPre:e.posPre,s,o?e.negSuf:e.posSuf),u.join("")}function un(t,e,n){var r="";for(0>t&&(r="-",t=-t),t=""+t;t.length<e;)t="0"+t;return n&&(t=t.substr(t.length-e)),r+t}function cn(t,e,n,r){return n=n||0,function(i){var o=i["get"+t]();return(n>0||o>-n)&&(o+=n),0===o&&-12==n&&(o=12),un(o,e,r)}}function ln(t,e){return function(n,r){var i=n["get"+t](),o=Ln(e?"SHORT"+t:t);return r[o][i]}}function fn(t){var e=-1*t.getTimezoneOffset(),n=e>=0?"+":"";return n+=un(Math[e>0?"floor":"ceil"](e/60),2)+un(Math.abs(e%60),2)}function hn(t){var e=new Date(t,0,1).getDay();return new Date(t,0,(4>=e?5:12)-e)}function pn(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate()+(4-t.getDay()))}function $n(t){return function(e){var n=hn(e.getFullYear()),r=pn(e),i=+r-+n,o=1+Math.round(i/6048e5);return un(o,t)}}function dn(t,e){return t.getHours()<12?e.AMPMS[0]:e.AMPMS[1]}function vn(t){function e(t){var e;if(e=t.match(n)){var r=new Date(0),i=0,o=0,a=e[8]?r.setUTCFullYear:r.setFullYear,s=e[8]?r.setUTCHours:r.setHours;e[9]&&(i=h(e[9]+e[10]),o=h(e[9]+e[11])),a.call(r,h(e[1]),h(e[2])-1,h(e[3]));var u=h(e[4]||0)-i,c=h(e[5]||0)-o,l=h(e[6]||0),f=Math.round(1e3*parseFloat("0."+(e[7]||0)));return s.call(r,u,c,l,f),r}return t}var n=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(n,r,i){var a,s,u="",c=[];if(r=r||"mediumDate",r=t.DATETIME_FORMATS[r]||r,w(n)&&(n=gi.test(n)?h(n):e(n)),b(n)&&(n=new Date(n)),!x(n))return n;for(;r;)s=mi.exec(r),s?(c=I(c,s,1),r=c.pop()):(c.push(r),r=null);return i&&"UTC"===i&&(n=new Date(n.getTime()),n.setMinutes(n.getMinutes()+n.getTimezoneOffset())),o(c,function(e){a=vi[e],u+=a?a(n,t.DATETIME_FORMATS):e.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),u}}function mn(){return function(t){return H(t,!0)}}function gn(){return function(t,e){if(b(t)&&(t=t.toString()),!ir(t)&&!w(t))return t;if(e=Math.abs(Number(e))===1/0?Number(e):h(e),w(t))return e?e>=0?t.slice(0,e):t.slice(e,t.length):"";var n,r,i=[];for(e>t.length?e=t.length:e<-t.length&&(e=-t.length),e>0?(n=0,r=e):(n=t.length+e,r=t.length);r>n;n++)i.push(t[n]);return i}}function yn(t){return function(e,n,r){function o(t,e){for(var r=0;r<n.length;r++){var i=n[r](t,e);if(0!==i)return i}return 0}function a(t,e){return e?function(e,n){return t(n,e)}:t}function s(t,e){var n=typeof t,r=typeof e;return n==r?(x(t)&&x(e)&&(t=t.valueOf(),e=e.valueOf()),"string"==n&&(t=t.toLowerCase(),e=e.toLowerCase()),t===e?0:e>t?-1:1):r>n?-1:1}return i(e)?(n=ir(n)?n:[n],0===n.length&&(n=["+"]),n=n.map(function(e){var n=!1,r=e||d;if(w(e)){if(("+"==e.charAt(0)||"-"==e.charAt(0))&&(n="-"==e.charAt(0),e=e.substring(1)),""===e)return a(function(t,e){return s(t,e)},n);if(r=t(e),r.constant){var i=r();return a(function(t,e){return s(t[i],e[i])},n)}}return a(function(t,e){return s(r(t),r(e))},n)}),Zn.call(e).sort(a(o,r))):e}}function wn(t){return S(t)&&(t={link:t}),t.restrict=t.restrict||"AC",v(t)}function bn(t,e){t.$name=e}function xn(t,e,r,i,a){var s=this,u=[],c=s.$$parentForm=t.parent().controller("form")||Si;s.$error={},s.$$success={},s.$pending=n,s.$name=a(e.name||e.ngForm||"")(r),s.$dirty=!1,s.$pristine=!0,s.$valid=!0,s.$invalid=!1,s.$submitted=!1,c.$addControl(s),s.$rollbackViewValue=function(){o(u,function(t){t.$rollbackViewValue()})},s.$commitViewValue=function(){o(u,function(t){t.$commitViewValue()})},s.$addControl=function(t){ot(t.$name,"input"),u.push(t),t.$name&&(s[t.$name]=t)},s.$$renameControl=function(t,e){var n=t.$name;s[n]===t&&delete s[n],s[e]=t,t.$name=e},s.$removeControl=function(t){t.$name&&s[t.$name]===t&&delete s[t.$name],o(s.$pending,function(e,n){s.$setValidity(n,null,t)}),o(s.$error,function(e,n){s.$setValidity(n,null,t)}),j(u,t)},Pn({ctrl:this,$element:t,set:function(t,e,n){var r=t[e];if(r){var i=r.indexOf(n);-1===i&&r.push(n)}else t[e]=[n]},unset:function(t,e,n){var r=t[e];r&&(j(r,n),0===r.length&&delete t[e])},parentForm:c,$animate:i}),s.$setDirty=function(){i.removeClass(t,Li),i.addClass(t,Bi),s.$dirty=!0,s.$pristine=!1,c.$setDirty()},s.$setPristine=function(){i.setClass(t,Li,Bi+" "+Ci),s.$dirty=!1,s.$pristine=!0,s.$submitted=!1,o(u,function(t){t.$setPristine()})},s.$setUntouched=function(){o(u,function(t){t.$setUntouched()})},s.$setSubmitted=function(){i.addClass(t,Ci),s.$submitted=!0,c.$setSubmitted()}}function Sn(t){t.$formatters.push(function(e){return t.$isEmpty(e)?e:e.toString()})}function Cn(t,e,n,r,i,o){An(t,e,n,r,i,o),Sn(r)}function An(t,e,n,r,i,o){var a=e[0].placeholder,s={},u=Fn(e[0].type);if(!i.android){var c=!1;e.on("compositionstart",function(t){c=!0}),e.on("compositionend",function(){c=!1,l()})}var l=function(t){if(!c){var i=e.val(),o=t&&t.type;if(Wn&&"input"===(t||s).type&&e[0].placeholder!==a)return void(a=e[0].placeholder);"password"===u||n.ngTrim&&"false"===n.ngTrim||(i=or(i)),(r.$viewValue!==i||""===i&&r.$$hasNativeValidators)&&r.$setViewValue(i,o)}};if(i.hasEvent("input"))e.on("input",l);else{var f,h=function(t){f||(f=o.defer(function(){l(t),f=null}))};e.on("keydown",function(t){var e=t.keyCode;91===e||e>15&&19>e||e>=37&&40>=e||h(t)}),i.hasEvent("paste")&&e.on("paste cut",h)}e.on("change",l),r.$render=function(){e.val(r.$isEmpty(r.$viewValue)?"":r.$viewValue)}}function kn(t,e){if(x(t))return t;if(w(t)){ji.lastIndex=0;var n=ji.exec(t);if(n){var r=+n[1],i=+n[2],o=0,a=0,s=0,u=0,c=hn(r),l=7*(i-1);return e&&(o=e.getHours(),a=e.getMinutes(),s=e.getSeconds(),u=e.getMilliseconds()),new Date(r,0,c.getDate()+l,o,a,s,u)}}return NaN}function En(t,e){return function(n,r){var i,a;if(x(n))return n;if(w(n)){if('"'==n.charAt(0)&&'"'==n.charAt(n.length-1)&&(n=n.substring(1,n.length-1)),Oi.test(n))return new Date(n);if(t.lastIndex=0,i=t.exec(n))return i.shift(),a=r?{yyyy:r.getFullYear(),MM:r.getMonth()+1,dd:r.getDate(),HH:r.getHours(),mm:r.getMinutes(),ss:r.getSeconds(),sss:r.getMilliseconds()/1e3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},o(i,function(t,n){n<e.length&&(a[e[n]]=+t)}),new Date(a.yyyy,a.MM-1,a.dd,a.HH,a.mm,a.ss||0,1e3*a.sss||0)}return NaN}}function On(t,e,r,i){return function(o,a,s,u,c,l,f){function h(t){return t&&!(t.getTime&&t.getTime()!==t.getTime())}function p(t){return g(t)?x(t)?t:r(t):n}Tn(o,a,s,u),An(o,a,s,u,c,l);var $,d=u&&u.$options&&u.$options.timezone;if(u.$$parserName=t,u.$parsers.push(function(t){if(u.$isEmpty(t))return null;if(e.test(t)){var i=r(t,$);return"UTC"===d&&i.setMinutes(i.getMinutes()-i.getTimezoneOffset()),i}return n}),u.$formatters.push(function(t){if(t&&!x(t))throw Ii("datefmt","Expected `{0}` to be a date",t);if(h(t)){if($=t,$&&"UTC"===d){var e=6e4*$.getTimezoneOffset();$=new Date($.getTime()+e)}return f("date")(t,i,d)}return $=null,""}),g(s.min)||s.ngMin){var v;u.$validators.min=function(t){return!h(t)||m(v)||r(t)>=v},s.$observe("min",function(t){v=p(t),u.$validate()})}if(g(s.max)||s.ngMax){var y;u.$validators.max=function(t){return!h(t)||m(y)||r(t)<=y},s.$observe("max",function(t){y=p(t),u.$validate()})}}}function Tn(t,e,r,i){var o=e[0],a=i.$$hasNativeValidators=y(o.validity);a&&i.$parsers.push(function(t){var r=e.prop(_n)||{};return r.badInput&&!r.typeMismatch?n:t})}function Mn(t,e,r,i,o,a){if(Tn(t,e,r,i),An(t,e,r,i,o,a),i.$$parserName="number",i.$parsers.push(function(t){return i.$isEmpty(t)?null:Ni.test(t)?parseFloat(t):n}),i.$formatters.push(function(t){if(!i.$isEmpty(t)){if(!b(t))throw Ii("numfmt","Expected `{0}` to be a number",t);t=t.toString()}return t}),r.min||r.ngMin){var s;i.$validators.min=function(t){return i.$isEmpty(t)||m(s)||t>=s},r.$observe("min",function(t){g(t)&&!b(t)&&(t=parseFloat(t,10)),s=b(t)&&!isNaN(t)?t:n,i.$validate()})}if(r.max||r.ngMax){var u;i.$validators.max=function(t){return i.$isEmpty(t)||m(u)||u>=t},r.$observe("max",function(t){g(t)&&!b(t)&&(t=parseFloat(t,10)),u=b(t)&&!isNaN(t)?t:n,i.$validate()})}}function Nn(t,e,n,r,i,o){An(t,e,n,r,i,o),Sn(r),r.$$parserName="url",r.$validators.url=function(t,e){var n=t||e;return r.$isEmpty(n)||Ti.test(n)}}function Vn(t,e,n,r,i,o){An(t,e,n,r,i,o),Sn(r),r.$$parserName="email",r.$validators.email=function(t,e){var n=t||e;return r.$isEmpty(n)||Mi.test(n)}}function Dn(t,e,n,r){m(n.name)&&e.attr("name",c());var i=function(t){e[0].checked&&r.$setViewValue(n.value,t&&t.type)};e.on("click",i),r.$render=function(){var t=n.value;e[0].checked=t==r.$viewValue},n.$observe("value",r.$render)}function jn(t,e,n,i,o){var a;if(g(i)){if(a=t(i),!a.constant)throw r("ngModel")("constexpr","Expected constant expression for `{0}`, but saw `{1}`.",n,i);return a(e)}return o}function Rn(t,e,n,r,i,o,a,s){var u=jn(s,t,"ngTrueValue",n.ngTrueValue,!0),c=jn(s,t,"ngFalseValue",n.ngFalseValue,!1),l=function(t){r.$setViewValue(e[0].checked,t&&t.type)};e.on("click",l),r.$render=function(){e[0].checked=r.$viewValue},r.$isEmpty=function(t){return t===!1},r.$formatters.push(function(t){return q(t,u)}),r.$parsers.push(function(t){return t?u:c})}function Pn(t){function e(t,e,u){e===n?r("$pending",t,u):i("$pending",t,u),T(e)?e?(f(s.$error,t,u),l(s.$$success,t,u)):(l(s.$error,t,u),f(s.$$success,t,u)):(f(s.$error,t,u),f(s.$$success,t,u)),s.$pending?(o(Gi,!0),s.$valid=s.$invalid=n,a("",null)):(o(Gi,!1),s.$valid=qn(s.$error),s.$invalid=!s.$valid,a("",s.$valid));var c;c=s.$pending&&s.$pending[t]?n:s.$error[t]?!1:s.$$success[t]?!0:null,a(t,c),h.$setValidity(t,c,s)}function r(t,e,n){s[t]||(s[t]={}),l(s[t],e,n)}function i(t,e,r){s[t]&&f(s[t],e,r),qn(s[t])&&(s[t]=n)}function o(t,e){e&&!c[t]?(p.addClass(u,t),c[t]=!0):!e&&c[t]&&(p.removeClass(u,t),c[t]=!1)}function a(t,e){t=t?"-"+et(t,"-"):"",o(Fi+t,e===!0),o(Hi+t,e===!1)}var s=t.ctrl,u=t.$element,c={},l=t.set,f=t.unset,h=t.parentForm,p=t.$animate;c[Hi]=!(c[Fi]=u.hasClass(Fi)),s.$setValidity=e}function qn(t){if(t)for(var e in t)return!1;return!0}function In(t,e){return t="ngClass"+t,["$animate",function(n){function r(t,e){var n=[];t:for(var r=0;r<t.length;r++){for(var i=t[r],o=0;o<e.length;o++)if(i==e[o])continue t;n.push(i)}return n}function i(t){if(ir(t))return t;if(w(t))return t.split(" ");if(y(t)){var e=[];return o(t,function(t,n){t&&(e=e.concat(n.split(" ")))}),e}return t}return{restrict:"AC",link:function(a,s,u){function c(t){var e=f(t,1);u.$addClass(e)}function l(t){var e=f(t,-1);u.$removeClass(e)}function f(t,e){var n=s.data("$classCounts")||{},r=[];return o(t,function(t){(e>0||n[t])&&(n[t]=(n[t]||0)+e,n[t]===+(e>0)&&r.push(t))}),s.data("$classCounts",n),r.join(" ")}function h(t,e){var i=r(e,t),o=r(t,e);i=f(i,1),o=f(o,-1),i&&i.length&&n.addClass(s,i),o&&o.length&&n.removeClass(s,o)}function p(t){if(e===!0||a.$index%2===e){var n=i(t||[]);if($){if(!q(t,$)){var r=i($);h(r,n)}}else c(n)}$=P(t)}var $;a.$watch(u[t],p,!0),u.$observe("class",function(e){p(a.$eval(u[t]))}),"ngClass"!==t&&a.$watch("$index",function(n,r){var o=1&n;if(o!==(1&r)){var s=i(a.$eval(u[t]));o===e?c(s):l(s)}})}}}]}var Un=/^\/(.+)\/([a-z]*)$/,_n="validity",Fn=function(t){return w(t)?t.toLowerCase():t},Hn=Object.prototype.hasOwnProperty,Ln=function(t){return w(t)?t.toUpperCase():t},Bn=function(t){return w(t)?t.replace(/[A-Z]/g,function(t){return String.fromCharCode(32|t.charCodeAt(0))}):t},zn=function(t){return w(t)?t.replace(/[a-z]/g,function(t){return String.fromCharCode(-33&t.charCodeAt(0))}):t};"i"!=="I".toLowerCase()&&(Fn=Bn,Ln=zn);var Wn,Gn,Jn,Yn,Zn=[].slice,Kn=[].splice,Xn=[].push,Qn=Object.prototype.toString,tr=r("ng"),er=t.angular||(t.angular={}),nr=0;Wn=e.documentMode,$.$inject=[],d.$inject=[];var rr,ir=Array.isArray,or=function(t){return w(t)?t.trim():t},ar=function(t){return t.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},sr=function(){if(g(sr.isActive_))return sr.isActive_;var t=!(!e.querySelector("[ng-csp]")&&!e.querySelector("[data-ng-csp]"));if(!t)try{new Function("")}catch(n){t=!0}return sr.isActive_=t},ur=["ng-","data-ng-","ng:","x-ng-"],cr=/[A-Z]/g,lr=!1,fr=1,hr=3,pr=8,$r=9,dr=11,vr={full:"1.3.4",major:1,minor:3,dot:4,codeName:"highfalutin-petroglyph"};yt.expando="ng339";var mr=yt.cache={},gr=1,yr=function(t,e,n){t.addEventListener(e,n,!1)},wr=function(t,e,n){t.removeEventListener(e,n,!1)};yt._data=function(t){return this.cache[t[this.expando]]||{}};var br=/([\:\-\_]+(.))/g,xr=/^moz([A-Z])/,Sr={mouseleave:"mouseout",mouseenter:"mouseover"},Cr=r("jqLite"),Ar=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,kr=/<|&#?\w+;/,Er=/<([\w:]+)/,Or=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Tr={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Tr.optgroup=Tr.option,Tr.tbody=Tr.tfoot=Tr.colgroup=Tr.caption=Tr.thead,Tr.th=Tr.td;var Mr=yt.prototype={ready:function(n){function r(){i||(i=!0,n())}var i=!1;"complete"===e.readyState?setTimeout(r):(this.on("DOMContentLoaded",r),yt(t).on("load",r))},toString:function(){var t=[];return o(this,function(e){t.push(""+e)}),"["+t.join(", ")+"]"},eq:function(t){return Gn(t>=0?this[t]:this[this.length+t])},length:0,push:Xn,sort:[].sort,splice:[].splice},Nr={};o("multiple,selected,checked,disabled,readOnly,required,open".split(","),function(t){Nr[Fn(t)]=t});var Vr={};o("input,select,option,textarea,button,form,details".split(","),function(t){Vr[t]=!0});var Dr={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};o({data:At,removeData:St},function(t,e){yt[e]=t}),o({data:At,inheritedData:Nt,scope:function(t){return Gn.data(t,"$scope")||Nt(t.parentNode||t,["$isolateScope","$scope"])},isolateScope:function(t){return Gn.data(t,"$isolateScope")||Gn.data(t,"$isolateScopeNoTemplate")},controller:Mt,injector:function(t){return Nt(t,"$injector")},removeAttr:function(t,e){t.removeAttribute(e)},hasClass:kt,css:function(t,e,n){return e=$t(e),g(n)?void(t.style[e]=n):t.style[e]},attr:function(t,e,r){var i=Fn(e);if(Nr[i]){if(!g(r))return t[e]||(t.attributes.getNamedItem(e)||$).specified?i:n;r?(t[e]=!0,t.setAttribute(e,i)):(t[e]=!1,t.removeAttribute(i))}else if(g(r))t.setAttribute(e,r);else if(t.getAttribute){var o=t.getAttribute(e,2);return null===o?n:o}},prop:function(t,e,n){return g(n)?void(t[e]=n):t[e]},text:function(){function t(t,e){if(m(e)){var n=t.nodeType;return n===fr||n===hr?t.textContent:""}t.textContent=e}return t.$dv="",t}(),val:function(t,e){if(m(e)){if(t.multiple&&"select"===D(t)){var n=[];return o(t.options,function(t){t.selected&&n.push(t.value||t.text)}),0===n.length?null:n}return t.value}t.value=e},html:function(t,e){return m(e)?t.innerHTML:(bt(t,!0),void(t.innerHTML=e))},empty:Vt},function(t,e){yt.prototype[e]=function(e,r){var i,o,a=this.length;if(t!==Vt&&(2==t.length&&t!==kt&&t!==Mt?e:r)===n){if(y(e)){for(i=0;a>i;i++)if(t===At)t(this[i],e);else for(o in e)t(this[i],o,e[o]);return this}for(var s=t.$dv,u=s===n?Math.min(a,1):a,c=0;u>c;c++){var l=t(this[c],e,r);s=s?s+l:l}return s}for(i=0;a>i;i++)t(this[i],e,r);return this}}),o({removeData:St,on:function Io(t,e,n,r){if(g(r))throw Cr("onargs","jqLite#on() does not support the `selector` or `eventData` parameters");if(vt(t)){var i=Ct(t,!0),o=i.events,a=i.handle;a||(a=i.handle=qt(t,o));for(var s=e.indexOf(" ")>=0?e.split(" "):[e],u=s.length;u--;){e=s[u];var c=o[e];c||(o[e]=[],"mouseenter"===e||"mouseleave"===e?Io(t,Sr[e],function(t){var n=this,r=t.relatedTarget;(!r||r!==n&&!n.contains(r))&&a(t,e)}):"$destroy"!==e&&yr(t,e,a),c=o[e]),c.push(n)}}},off:xt,one:function(t,e,n){t=Gn(t),t.on(e,function r(){t.off(e,n),t.off(e,r)}),t.on(e,n)},replaceWith:function(t,e){var n,r=t.parentNode;bt(t),o(new yt(e),function(e){n?r.insertBefore(e,n.nextSibling):r.replaceChild(e,t),n=e})},children:function(t){var e=[];return o(t.childNodes,function(t){t.nodeType===fr&&e.push(t)}),e},contents:function(t){return t.contentDocument||t.childNodes||[]},append:function(t,e){var n=t.nodeType;if(n===fr||n===dr){e=new yt(e);for(var r=0,i=e.length;i>r;r++){var o=e[r];t.appendChild(o)}}},prepend:function(t,e){if(t.nodeType===fr){var n=t.firstChild;o(new yt(e),function(e){t.insertBefore(e,n)})}},wrap:function(t,e){e=Gn(e).eq(0).clone()[0];var n=t.parentNode;n&&n.replaceChild(e,t),e.appendChild(t)},remove:Dt,detach:function(t){Dt(t,!0)},after:function(t,e){var n=t,r=t.parentNode;e=new yt(e);for(var i=0,o=e.length;o>i;i++){var a=e[i];r.insertBefore(a,n.nextSibling),n=a}},addClass:Ot,removeClass:Et,toggleClass:function(t,e,n){e&&o(e.split(" "),function(e){var r=n;m(r)&&(r=!kt(t,e)),(r?Ot:Et)(t,e)})},parent:function(t){var e=t.parentNode;return e&&e.nodeType!==dr?e:null},next:function(t){return t.nextElementSibling},find:function(t,e){return t.getElementsByTagName?t.getElementsByTagName(e):[]},clone:wt,triggerHandler:function(t,e,n){var r,i,a,s=e.type||e,u=Ct(t),c=u&&u.events,l=c&&c[s];l&&(r={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return this.defaultPrevented===!0},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return this.immediatePropagationStopped===!0},stopPropagation:$,type:s,target:t},e.type&&(r=f(r,e)),i=P(l),a=n?[r].concat(n):[r],o(i,function(e){r.isImmediatePropagationStopped()||e.apply(t,a)}))}},function(t,e){yt.prototype[e]=function(e,n,r){for(var i,o=0,a=this.length;a>o;o++)m(i)?(i=t(this[o],e,n,r),g(i)&&(i=Gn(i))):Tt(i,t(this[o],e,n,r));return g(i)?i:this},yt.prototype.bind=yt.prototype.on,yt.prototype.unbind=yt.prototype.off}),Ut.prototype={put:function(t,e){this[It(t,this.nextUid)]=e},get:function(t){return this[It(t,this.nextUid)]},remove:function(t){var e=this[t=It(t,this.nextUid)];return delete this[t],e}};var jr=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,Rr=/,/,Pr=/^\s*(_?)(\S+?)\1\s*$/,qr=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,Ir=r("$injector");Ht.$$annotate=Ft;var Ur=r("$animate"),_r=["$provide",function(t){this.$$selectors={},this.register=function(e,n){var r=e+"-animation";if(e&&"."!=e.charAt(0))throw Ur("notcsel","Expecting class selector starting with '.' got '{0}'.",e);this.$$selectors[e.substr(1)]=r,t.factory(r,n)},this.classNameFilter=function(t){return 1===arguments.length&&(this.$$classNameFilter=t instanceof RegExp?t:null),this.$$classNameFilter},this.$get=["$$q","$$asyncCallback","$rootScope",function(t,e,n){function r(e){var r,i=t.defer();return i.promise.$$cancelFn=function(){r&&r()},n.$$postDigest(function(){r=e(function(){i.resolve()})}),i.promise}function i(t,e){var n=[],r=[],i=ut();return o((t.attr("class")||"").split(/\s+/),function(t){i[t]=!0}),o(e,function(t,e){var o=i[e];t===!1&&o?r.push(e):t!==!0||o||n.push(e)}),n.length+r.length>0&&[n.length?n:null,r.length?r:null]}function a(t,e,n){for(var r=0,i=e.length;i>r;++r){var o=e[r];t[o]=n}}function s(){return c||(c=t.defer(),e(function(){c.resolve(),c=null})),c.promise}function u(t,e){if(er.isObject(e)){var n=f(e.from||{},e.to||{});t.css(n)}}var c;return{animate:function(t,e,n){return u(t,{from:e,to:n}),s()},enter:function(t,e,n,r){return u(t,r),n?n.after(t):e.prepend(t),s()},leave:function(t,e){return t.remove(),s()},move:function(t,e,n,r){return this.enter(t,e,n,r)},addClass:function(t,e,n){return this.setClass(t,e,[],n)},$$addClassImmediately:function(t,e,n){return t=Gn(t),e=w(e)?e:ir(e)?e.join(" "):"",o(t,function(t){Ot(t,e)}),u(t,n),s()},removeClass:function(t,e,n){return this.setClass(t,[],e,n)},$$removeClassImmediately:function(t,e,n){return t=Gn(t),e=w(e)?e:ir(e)?e.join(" "):"",o(t,function(t){Et(t,e)}),u(t,n),s()},setClass:function(t,e,n,o){var s=this,u="$$animateClasses",c=!1;t=Gn(t);var l=t.data(u);l?o&&l.options&&(l.options=er.extend(l.options||{},o)):(l={classes:{},options:o},c=!0);var f=l.classes;return e=ir(e)?e:e.split(" "),n=ir(n)?n:n.split(" "),a(f,e,!0),a(f,n,!1),c&&(l.promise=r(function(e){var n=t.data(u);if(t.removeData(u),n){var r=i(t,n.classes);r&&s.$$setClassImmediately(t,r[0],r[1],n.options)}e()}),t.data(u,l)),l.promise},$$setClassImmediately:function(t,e,n,r){return e&&this.$$addClassImmediately(t,e),n&&this.$$removeClassImmediately(t,n),u(t,r),s()},enabled:$,cancel:$}}]}],Fr=r("$compile");Yt.$inject=["$provide","$$sanitizeUriProvider"];var Hr=/^((?:x|data)[\:\-_])/i,Lr="application/json",Br={"Content-Type":Lr+";charset=utf-8"},zr=/^\s*(\[|\{[^\{])/,Wr=/[\}\]]\s*$/,Gr=/^\)\]\}',?\n/,Jr=r("$interpolate"),Yr=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Zr={http:80,https:443,ftp:21},Kr=r("$location"),Xr={$$html5:!1,$$replace:!1,absUrl:Ce("$$absUrl"),url:function(t){if(m(t))return this.$$url;var e=Yr.exec(t);return(e[1]||""===t)&&this.path(decodeURIComponent(e[1])),(e[2]||e[1]||""===t)&&this.search(e[3]||""),this.hash(e[5]||""),this},protocol:Ce("$$protocol"),host:Ce("$$host"),port:Ce("$$port"),path:Ae("$$path",function(t){return t=null!==t?t.toString():"","/"==t.charAt(0)?t:"/"+t}),search:function(t,e){switch(arguments.length){case 0:return this.$$search;case 1:if(w(t)||b(t))t=t.toString(),this.$$search=W(t);else{if(!y(t))throw Kr("isrcharg","The first argument of the `$location#search()` call must be a string or an object.");t=R(t,{}),o(t,function(e,n){null==e&&delete t[n]}),this.$$search=t}break;default:m(e)||null===e?delete this.$$search[t]:this.$$search[t]=e;
}return this.$$compose(),this},hash:Ae("$$hash",function(t){return null!==t?t.toString():""}),replace:function(){return this.$$replace=!0,this}};o([Se,xe,be],function(t){t.prototype=Object.create(Xr),t.prototype.state=function(e){if(!arguments.length)return this.$$state;if(t!==be||!this.$$html5)throw Kr("nostate","History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");return this.$$state=m(e)?null:e,this}});var Qr=r("$parse"),ti=Function.prototype.call,ei=Function.prototype.apply,ni=Function.prototype.bind,ri=ut();o({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(t,e){t.constant=t.literal=t.sharedGetter=!0,ri[e]=t}),ri["this"]=function(t){return t},ri["this"].sharedGetter=!0;var ii=f(ut(),{"+":function(t,e,r,i){return r=r(t,e),i=i(t,e),g(r)?g(i)?r+i:r:g(i)?i:n},"-":function(t,e,n,r){return n=n(t,e),r=r(t,e),(g(n)?n:0)-(g(r)?r:0)},"*":function(t,e,n,r){return n(t,e)*r(t,e)},"/":function(t,e,n,r){return n(t,e)/r(t,e)},"%":function(t,e,n,r){return n(t,e)%r(t,e)},"===":function(t,e,n,r){return n(t,e)===r(t,e)},"!==":function(t,e,n,r){return n(t,e)!==r(t,e)},"==":function(t,e,n,r){return n(t,e)==r(t,e)},"!=":function(t,e,n,r){return n(t,e)!=r(t,e)},"<":function(t,e,n,r){return n(t,e)<r(t,e)},">":function(t,e,n,r){return n(t,e)>r(t,e)},"<=":function(t,e,n,r){return n(t,e)<=r(t,e)},">=":function(t,e,n,r){return n(t,e)>=r(t,e)},"&&":function(t,e,n,r){return n(t,e)&&r(t,e)},"||":function(t,e,n,r){return n(t,e)||r(t,e)},"!":function(t,e,n){return!n(t,e)},"=":!0,"|":!0}),oi={n:"\n",f:"\f",r:"\r",t:"	",v:"","'":"'",'"':'"'},ai=function(t){this.options=t};ai.prototype={constructor:ai,lex:function(t){for(this.text=t,this.index=0,this.tokens=[];this.index<this.text.length;){var e=this.text.charAt(this.index);if('"'===e||"'"===e)this.readString(e);else if(this.isNumber(e)||"."===e&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(e))this.readIdent();else if(this.is(e,"(){}[].,;:?"))this.tokens.push({index:this.index,text:e}),this.index++;else if(this.isWhitespace(e))this.index++;else{var n=e+this.peek(),r=n+this.peek(2),i=ii[e],o=ii[n],a=ii[r];if(i||o||a){var s=a?r:o?n:e;this.tokens.push({index:this.index,text:s,operator:!0}),this.index+=s.length}else this.throwError("Unexpected next character ",this.index,this.index+1)}}return this.tokens},is:function(t,e){return-1!==e.indexOf(t)},peek:function(t){var e=t||1;return this.index+e<this.text.length?this.text.charAt(this.index+e):!1},isNumber:function(t){return t>="0"&&"9">=t&&"string"==typeof t},isWhitespace:function(t){return" "===t||"\r"===t||"	"===t||"\n"===t||""===t||" "===t},isIdent:function(t){return t>="a"&&"z">=t||t>="A"&&"Z">=t||"_"===t||"$"===t},isExpOperator:function(t){return"-"===t||"+"===t||this.isNumber(t)},throwError:function(t,e,n){n=n||this.index;var r=g(e)?"s "+e+"-"+this.index+" ["+this.text.substring(e,n)+"]":" "+n;throw Qr("lexerr","Lexer Error: {0} at column{1} in expression [{2}].",t,r,this.text)},readNumber:function(){for(var t="",e=this.index;this.index<this.text.length;){var n=Fn(this.text.charAt(this.index));if("."==n||this.isNumber(n))t+=n;else{var r=this.peek();if("e"==n&&this.isExpOperator(r))t+=n;else if(this.isExpOperator(n)&&r&&this.isNumber(r)&&"e"==t.charAt(t.length-1))t+=n;else{if(!this.isExpOperator(n)||r&&this.isNumber(r)||"e"!=t.charAt(t.length-1))break;this.throwError("Invalid exponent")}}this.index++}this.tokens.push({index:e,text:t,constant:!0,value:Number(t)})},readIdent:function(){for(var t=this.index;this.index<this.text.length;){var e=this.text.charAt(this.index);if(!this.isIdent(e)&&!this.isNumber(e))break;this.index++}this.tokens.push({index:t,text:this.text.slice(t,this.index),identifier:!0})},readString:function(t){var e=this.index;this.index++;for(var n="",r=t,i=!1;this.index<this.text.length;){var o=this.text.charAt(this.index);if(r+=o,i){if("u"===o){var a=this.text.substring(this.index+1,this.index+5);a.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+a+"]"),this.index+=4,n+=String.fromCharCode(parseInt(a,16))}else{var s=oi[o];n+=s||o}i=!1}else if("\\"===o)i=!0;else{if(o===t)return this.index++,void this.tokens.push({index:e,text:r,constant:!0,value:n});n+=o}this.index++}this.throwError("Unterminated quote",e)}};var si=function(t,e,n){this.lexer=t,this.$filter=e,this.options=n};si.ZERO=f(function(){return 0},{sharedGetter:!0,constant:!0}),si.prototype={constructor:si,parse:function(t){this.text=t,this.tokens=this.lexer.lex(t);var e=this.statements();return 0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]),e.literal=!!e.literal,e.constant=!!e.constant,e},primary:function(){var t;this.expect("(")?(t=this.filterChain(),this.consume(")")):this.expect("[")?t=this.arrayDeclaration():this.expect("{")?t=this.object():this.peek().identifier?t=this.identifier():this.peek().constant?t=this.constant():this.throwError("not a primary expression",this.peek());for(var e,n;e=this.expect("(","[",".");)"("===e.text?(t=this.functionCall(t,n),n=null):"["===e.text?(n=t,t=this.objectIndex(t)):"."===e.text?(n=t,t=this.fieldAccess(t)):this.throwError("IMPOSSIBLE");return t},throwError:function(t,e){throw Qr("syntax","Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].",e.text,t,e.index+1,this.text,this.text.substring(e.index))},peekToken:function(){if(0===this.tokens.length)throw Qr("ueoe","Unexpected end of expression: {0}",this.text);return this.tokens[0]},peek:function(t,e,n,r){return this.peekAhead(0,t,e,n,r)},peekAhead:function(t,e,n,r,i){if(this.tokens.length>t){var o=this.tokens[t],a=o.text;if(a===e||a===n||a===r||a===i||!e&&!n&&!r&&!i)return o}return!1},expect:function(t,e,n,r){var i=this.peek(t,e,n,r);return i?(this.tokens.shift(),i):!1},consume:function(t){if(0===this.tokens.length)throw Qr("ueoe","Unexpected end of expression: {0}",this.text);var e=this.expect(t);return e||this.throwError("is unexpected, expecting ["+t+"]",this.peek()),e},unaryFn:function(t,e){var n=ii[t];return f(function(t,r){return n(t,r,e)},{constant:e.constant,inputs:[e]})},binaryFn:function(t,e,n,r){var i=ii[e];return f(function(e,r){return i(e,r,t,n)},{constant:t.constant&&n.constant,inputs:!r&&[t,n]})},identifier:function(){for(var t=this.consume().text;this.peek(".")&&this.peekAhead(1).identifier&&!this.peekAhead(2,"(");)t+=this.consume().text+this.consume().text;return ri[t]||Pe(t,this.options,this.text)},constant:function(){var t=this.consume().value;return f(function(){return t},{constant:!0,literal:!0})},statements:function(){for(var t=[];;)if(this.tokens.length>0&&!this.peek("}",")",";","]")&&t.push(this.filterChain()),!this.expect(";"))return 1===t.length?t[0]:function(e,n){for(var r,i=0,o=t.length;o>i;i++)r=t[i](e,n);return r}},filterChain:function(){for(var t,e=this.expression();t=this.expect("|");)e=this.filter(e);return e},filter:function(t){var e,r,i=this.$filter(this.consume().text);if(this.peek(":"))for(e=[],r=[];this.expect(":");)e.push(this.expression());var o=[t].concat(e||[]);return f(function(o,a){var s=t(o,a);if(r){r[0]=s;for(var u=e.length;u--;)r[u+1]=e[u](o,a);return i.apply(n,r)}return i(s)},{constant:!i.$stateful&&o.every(Ne),inputs:!i.$stateful&&o})},expression:function(){return this.assignment()},assignment:function(){var t,e,n=this.ternary();return(e=this.expect("="))?(n.assign||this.throwError("implies assignment but ["+this.text.substring(0,e.index)+"] can not be assigned to",e),t=this.ternary(),f(function(e,r){return n.assign(e,t(e,r),r)},{inputs:[n,t]})):n},ternary:function(){var t,e,n=this.logicalOR();if((e=this.expect("?"))&&(t=this.assignment(),this.consume(":"))){var r=this.assignment();return f(function(e,i){return n(e,i)?t(e,i):r(e,i)},{constant:n.constant&&t.constant&&r.constant})}return n},logicalOR:function(){for(var t,e=this.logicalAND();t=this.expect("||");)e=this.binaryFn(e,t.text,this.logicalAND(),!0);return e},logicalAND:function(){var t,e=this.equality();return(t=this.expect("&&"))&&(e=this.binaryFn(e,t.text,this.logicalAND(),!0)),e},equality:function(){var t,e=this.relational();return(t=this.expect("==","!=","===","!=="))&&(e=this.binaryFn(e,t.text,this.equality())),e},relational:function(){var t,e=this.additive();return(t=this.expect("<",">","<=",">="))&&(e=this.binaryFn(e,t.text,this.relational())),e},additive:function(){for(var t,e=this.multiplicative();t=this.expect("+","-");)e=this.binaryFn(e,t.text,this.multiplicative());return e},multiplicative:function(){for(var t,e=this.unary();t=this.expect("*","/","%");)e=this.binaryFn(e,t.text,this.unary());return e},unary:function(){var t;return this.expect("+")?this.primary():(t=this.expect("-"))?this.binaryFn(si.ZERO,t.text,this.unary()):(t=this.expect("!"))?this.unaryFn(t.text,this.unary()):this.primary()},fieldAccess:function(t){var e=this.text,n=this.consume().text,r=Pe(n,this.options,e);return f(function(e,n,i){return r(i||t(e,n))},{assign:function(r,i,o){var a=t(r,o);return a||t.assign(r,a={}),Ve(a,n,i,e)}})},objectIndex:function(t){var e=this.text,r=this.expression();return this.consume("]"),f(function(i,o){var a,s=t(i,o),u=r(i,o);return Oe(u,e),s?a=Te(s[u],e):n},{assign:function(n,i,o){var a=Oe(r(n,o),e),s=Te(t(n,o),e);return s||t.assign(n,s={}),s[a]=i}})},functionCall:function(t,e){var n=[];if(")"!==this.peekToken().text)do n.push(this.expression());while(this.expect(","));this.consume(")");var r=this.text,i=n.length?[]:null;return function(o,a){var s=e?e(o,a):o,u=t(o,a,s)||$;if(i)for(var c=n.length;c--;)i[c]=Te(n[c](o,a),r);Te(s,r),Me(u,r);var l=u.apply?u.apply(s,i):u(i[0],i[1],i[2],i[3],i[4]);return Te(l,r)}},arrayDeclaration:function(){var t=[];if("]"!==this.peekToken().text)do{if(this.peek("]"))break;t.push(this.expression())}while(this.expect(","));return this.consume("]"),f(function(e,n){for(var r=[],i=0,o=t.length;o>i;i++)r.push(t[i](e,n));return r},{literal:!0,constant:t.every(Ne),inputs:t})},object:function(){var t=[],e=[];if("}"!==this.peekToken().text)do{if(this.peek("}"))break;var n=this.consume();n.constant?t.push(n.value):n.identifier?t.push(n.text):this.throwError("invalid key",n),this.consume(":"),e.push(this.expression())}while(this.expect(","));return this.consume("}"),f(function(n,r){for(var i={},o=0,a=e.length;a>o;o++)i[t[o]]=e[o](n,r);return i},{literal:!0,constant:e.every(Ne),inputs:e})}};var ui=ut(),ci=ut(),li=Object.prototype.valueOf,fi=r("$sce"),hi={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Fr=r("$compile"),pi=e.createElement("a"),$i=Qe(t.location.href);nn.$inject=["$provide"],on.$inject=["$locale"],an.$inject=["$locale"];var di=".",vi={yyyy:cn("FullYear",4),yy:cn("FullYear",2,0,!0),y:cn("FullYear",1),MMMM:ln("Month"),MMM:ln("Month",!0),MM:cn("Month",2,1),M:cn("Month",1,1),dd:cn("Date",2),d:cn("Date",1),HH:cn("Hours",2),H:cn("Hours",1),hh:cn("Hours",2,-12),h:cn("Hours",1,-12),mm:cn("Minutes",2),m:cn("Minutes",1),ss:cn("Seconds",2),s:cn("Seconds",1),sss:cn("Milliseconds",3),EEEE:ln("Day"),EEE:ln("Day",!0),a:dn,Z:fn,ww:$n(2),w:$n(1)},mi=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,gi=/^\-?\d+$/;vn.$inject=["$locale"];var yi=v(Fn),wi=v(Ln);yn.$inject=["$parse"];var bi=v({restrict:"E",compile:function(t,e){return e.href||e.xlinkHref||e.name?void 0:function(t,e){var n="[object SVGAnimatedString]"===Qn.call(e.prop("href"))?"xlink:href":"href";e.on("click",function(t){e.attr(n)||t.preventDefault()})}}}),xi={};o(Nr,function(t,e){if("multiple"!=t){var n=Zt("ng-"+e);xi[n]=function(){return{restrict:"A",priority:100,link:function(t,r,i){t.$watch(i[n],function(t){i.$set(e,!!t)})}}}}}),o(Dr,function(t,e){xi[e]=function(){return{priority:100,link:function(t,n,r){if("ngPattern"===e&&"/"==r.ngPattern.charAt(0)){var i=r.ngPattern.match(Un);if(i)return void r.$set("ngPattern",new RegExp(i[1],i[2]))}t.$watch(r[e],function(t){r.$set(e,t)})}}}}),o(["src","srcset","href"],function(t){var e=Zt("ng-"+t);xi[e]=function(){return{priority:99,link:function(n,r,i){var o=t,a=t;"href"===t&&"[object SVGAnimatedString]"===Qn.call(r.prop("href"))&&(a="xlinkHref",i.$attr[a]="xlink:href",o=null),i.$observe(e,function(e){return e?(i.$set(a,e),void(Wn&&o&&r.prop(o,i[a]))):void("href"===t&&i.$set(a,null))})}}}});var Si={$addControl:$,$$renameControl:bn,$removeControl:$,$setValidity:$,$setDirty:$,$setPristine:$,$setSubmitted:$},Ci="ng-submitted";xn.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Ai=function(t){return["$timeout",function(e){var r={name:"form",restrict:t?"EAC":"E",controller:xn,compile:function(t){return t.addClass(Li).addClass(Fi),{pre:function(t,r,i,o){if(!("action"in i)){var a=function(e){t.$apply(function(){o.$commitViewValue(),o.$setSubmitted()}),e.preventDefault()};yr(r[0],"submit",a),r.on("$destroy",function(){e(function(){wr(r[0],"submit",a)},0,!1)})}var s=o.$$parentForm,u=o.$name;u&&(Ve(t,u,o,u),i.$observe(i.name?"name":"ngForm",function(e){u!==e&&(Ve(t,u,n,u),u=e,Ve(t,u,o,u),s.$$renameControl(o,u))})),r.on("$destroy",function(){s.$removeControl(o),u&&Ve(t,u,n,u),f(o,Si)})}}}};return r}]},ki=Ai(),Ei=Ai(!0),Oi=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,Ti=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Mi=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Ni=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Vi=/^(\d{4})-(\d{2})-(\d{2})$/,Di=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,ji=/^(\d{4})-W(\d\d)$/,Ri=/^(\d{4})-(\d\d)$/,Pi=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,qi=/(\s+|^)default(\s+|$)/,Ii=new r("ngModel"),Ui={text:Cn,date:On("date",Vi,En(Vi,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":On("datetimelocal",Di,En(Di,["yyyy","MM","dd","HH","mm","ss","sss"]),"yyyy-MM-ddTHH:mm:ss.sss"),time:On("time",Pi,En(Pi,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:On("week",ji,kn,"yyyy-Www"),month:On("month",Ri,En(Ri,["yyyy","MM"]),"yyyy-MM"),number:Mn,url:Nn,email:Vn,radio:Dn,checkbox:Rn,hidden:$,button:$,submit:$,reset:$,file:$},_i=["$browser","$sniffer","$filter","$parse",function(t,e,n,r){return{restrict:"E",require:["?ngModel"],link:{pre:function(i,o,a,s){s[0]&&(Ui[Fn(a.type)]||Ui.text)(i,o,a,s[0],e,t,n,r)}}}}],Fi="ng-valid",Hi="ng-invalid",Li="ng-pristine",Bi="ng-dirty",zi="ng-untouched",Wi="ng-touched",Gi="ng-pending",Ji=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(t,e,r,i,a,s,u,c,l,f){this.$viewValue=Number.NaN,this.$modelValue=Number.NaN,this.$$rawModelValue=n,this.$validators={},this.$asyncValidators={},this.$parsers=[],this.$formatters=[],this.$viewChangeListeners=[],this.$untouched=!0,this.$touched=!1,this.$pristine=!0,this.$dirty=!1,this.$valid=!0,this.$invalid=!1,this.$error={},this.$$success={},this.$pending=n,this.$name=f(r.name||"",!1)(t);var h=a(r.ngModel),p=h.assign,d=h,v=p,y=null,w=this;this.$$setOptions=function(t){if(w.$options=t,t&&t.getterSetter){var e=a(r.ngModel+"()"),n=a(r.ngModel+"($$$p)");d=function(t){var n=h(t);return S(n)&&(n=e(t)),n},v=function(t,e){S(h(t))?n(t,{$$$p:w.$modelValue}):p(t,w.$modelValue)}}else if(!h.assign)throw Ii("nonassign","Expression '{0}' is non-assignable. Element: {1}",r.ngModel,B(i))},this.$render=$,this.$isEmpty=function(t){return m(t)||""===t||null===t||t!==t};var x=i.inheritedData("$formController")||Si,C=0;Pn({ctrl:this,$element:i,set:function(t,e){t[e]=!0},unset:function(t,e){delete t[e]},parentForm:x,$animate:s}),this.$setPristine=function(){w.$dirty=!1,w.$pristine=!0,s.removeClass(i,Bi),s.addClass(i,Li)},this.$setDirty=function(){w.$dirty=!0,w.$pristine=!1,s.removeClass(i,Li),s.addClass(i,Bi),x.$setDirty()},this.$setUntouched=function(){w.$touched=!1,w.$untouched=!0,s.setClass(i,zi,Wi)},this.$setTouched=function(){w.$touched=!0,w.$untouched=!1,s.setClass(i,Wi,zi)},this.$rollbackViewValue=function(){u.cancel(y),w.$viewValue=w.$$lastCommittedViewValue,w.$render()},this.$validate=function(){if(!b(w.$modelValue)||!isNaN(w.$modelValue)){var t=w.$$lastCommittedViewValue,e=w.$$rawModelValue,r=w.$$parserName||"parse",i=w.$error[r]?!1:n,o=w.$valid,a=w.$modelValue,s=w.$options&&w.$options.allowInvalid;w.$$runValidators(i,e,t,function(t){s||o===t||(w.$modelValue=t?e:n,w.$modelValue!==a&&w.$$writeModelToScope())})}},this.$$runValidators=function(t,e,r,i){function a(t){var e=w.$$parserName||"parse";if(t===n)c(e,null);else if(c(e,t),!t)return o(w.$validators,function(t,e){c(e,null)}),o(w.$asyncValidators,function(t,e){c(e,null)}),!1;return!0}function s(){var t=!0;return o(w.$validators,function(n,i){var o=n(e,r);t=t&&o,c(i,o)}),t?!0:(o(w.$asyncValidators,function(t,e){c(e,null)}),!1)}function u(){var t=[],i=!0;o(w.$asyncValidators,function(o,a){var s=o(e,r);if(!M(s))throw Ii("$asyncValidators","Expected asynchronous validator to return a promise but got '{0}' instead.",s);c(a,n),t.push(s.then(function(){c(a,!0)},function(t){i=!1,c(a,!1)}))}),t.length?l.all(t).then(function(){f(i)},$):f(!0)}function c(t,e){h===C&&w.$setValidity(t,e)}function f(t){h===C&&i(t)}C++;var h=C;return a(t)&&s()?void u():void f(!1)},this.$commitViewValue=function(){var t=w.$viewValue;u.cancel(y),(w.$$lastCommittedViewValue!==t||""===t&&w.$$hasNativeValidators)&&(w.$$lastCommittedViewValue=t,w.$pristine&&this.$setDirty(),this.$$parseAndValidate())},this.$$parseAndValidate=function(){function e(){w.$modelValue!==s&&w.$$writeModelToScope()}var r=w.$$lastCommittedViewValue,i=r,o=m(i)?n:!0;if(o)for(var a=0;a<w.$parsers.length;a++)if(i=w.$parsers[a](i),m(i)){o=!1;break}b(w.$modelValue)&&isNaN(w.$modelValue)&&(w.$modelValue=d(t));var s=w.$modelValue,u=w.$options&&w.$options.allowInvalid;w.$$rawModelValue=i,u&&(w.$modelValue=i,e()),w.$$runValidators(o,i,r,function(t){u||(w.$modelValue=t?i:n,e())})},this.$$writeModelToScope=function(){v(t,w.$modelValue),o(w.$viewChangeListeners,function(t){try{t()}catch(n){e(n)}})},this.$setViewValue=function(t,e){w.$viewValue=t,(!w.$options||w.$options.updateOnDefault)&&w.$$debounceViewValueCommit(e)},this.$$debounceViewValueCommit=function(e){var n,r=0,i=w.$options;i&&g(i.debounce)&&(n=i.debounce,b(n)?r=n:b(n[e])?r=n[e]:b(n["default"])&&(r=n["default"])),u.cancel(y),r?y=u(function(){w.$commitViewValue()},r):c.$$phase?w.$commitViewValue():t.$apply(function(){w.$commitViewValue()})},t.$watch(function(){var e=d(t);if(e!==w.$modelValue){w.$modelValue=w.$$rawModelValue=e;for(var r=w.$formatters,i=r.length,o=e;i--;)o=r[i](o);w.$viewValue!==o&&(w.$viewValue=w.$$lastCommittedViewValue=o,w.$render(),w.$$runValidators(n,e,o,$))}return e})}],Yi=["$rootScope",function(t){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Ji,priority:1,compile:function(e){return e.addClass(Li).addClass(zi).addClass(Fi),{pre:function(t,e,n,r){var i=r[0],o=r[1]||Si;i.$$setOptions(r[2]&&r[2].$options),o.$addControl(i),n.$observe("name",function(t){i.$name!==t&&o.$$renameControl(i,t)}),t.$on("$destroy",function(){o.$removeControl(i)})},post:function(e,n,r,i){var o=i[0];o.$options&&o.$options.updateOn&&n.on(o.$options.updateOn,function(t){o.$$debounceViewValueCommit(t&&t.type)}),n.on("blur",function(n){o.$touched||(t.$$phase?e.$evalAsync(o.$setTouched):e.$apply(o.$setTouched))})}}}}}],Zi=v({restrict:"A",require:"ngModel",link:function(t,e,n,r){r.$viewChangeListeners.push(function(){t.$eval(n.ngChange)})}}),Ki=function(){return{restrict:"A",require:"?ngModel",link:function(t,e,n,r){r&&(n.required=!0,r.$validators.required=function(t,e){return!n.required||!r.$isEmpty(e)},n.$observe("required",function(){r.$validate()}))}}},Xi=function(){return{restrict:"A",require:"?ngModel",link:function(t,e,i,o){if(o){var a,s=i.ngPattern||i.pattern;i.$observe("pattern",function(t){if(w(t)&&t.length>0&&(t=new RegExp("^"+t+"$")),t&&!t.test)throw r("ngPattern")("noregexp","Expected {0} to be a RegExp but was {1}. Element: {2}",s,t,B(e));a=t||n,o.$validate()}),o.$validators.pattern=function(t){return o.$isEmpty(t)||m(a)||a.test(t)}}}}},Qi=function(){return{restrict:"A",require:"?ngModel",link:function(t,e,n,r){if(r){var i=-1;n.$observe("maxlength",function(t){var e=h(t);i=isNaN(e)?-1:e,r.$validate()}),r.$validators.maxlength=function(t,e){return 0>i||r.$isEmpty(t)||e.length<=i}}}}},to=function(){return{restrict:"A",require:"?ngModel",link:function(t,e,n,r){if(r){var i=0;n.$observe("minlength",function(t){i=h(t)||0,r.$validate()}),r.$validators.minlength=function(t,e){return r.$isEmpty(e)||e.length>=i}}}}},eo=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(t,e,r,i){var a=e.attr(r.$attr.ngList)||", ",s="false"!==r.ngTrim,u=s?or(a):a,c=function(t){if(!m(t)){var e=[];return t&&o(t.split(u),function(t){t&&e.push(s?or(t):t)}),e}};i.$parsers.push(c),i.$formatters.push(function(t){return ir(t)?t.join(a):n}),i.$isEmpty=function(t){return!t||!t.length}}}},no=/^(true|false|\d+)$/,ro=function(){return{restrict:"A",priority:100,compile:function(t,e){return no.test(e.ngValue)?function(t,e,n){n.$set("value",t.$eval(n.ngValue))}:function(t,e,n){t.$watch(n.ngValue,function(t){n.$set("value",t)})}}}},io=function(){return{restrict:"A",controller:["$scope","$attrs",function(t,e){var r=this;this.$options=t.$eval(e.ngModelOptions),this.$options.updateOn!==n?(this.$options.updateOnDefault=!1,this.$options.updateOn=or(this.$options.updateOn.replace(qi,function(){return r.$options.updateOnDefault=!0," "}))):this.$options.updateOnDefault=!0}]}},oo=["$compile",function(t){return{restrict:"AC",compile:function(e){return t.$$addBindingClass(e),function(e,r,i){t.$$addBindingInfo(r,i.ngBind),r=r[0],e.$watch(i.ngBind,function(t){r.textContent=t===n?"":t})}}}}],ao=["$interpolate","$compile",function(t,e){return{compile:function(r){return e.$$addBindingClass(r),function(r,i,o){var a=t(i.attr(o.$attr.ngBindTemplate));e.$$addBindingInfo(i,a.expressions),i=i[0],o.$observe("ngBindTemplate",function(t){i.textContent=t===n?"":t})}}}}],so=["$sce","$parse","$compile",function(t,e,n){return{restrict:"A",compile:function(r,i){var o=e(i.ngBindHtml),a=e(i.ngBindHtml,function(t){return(t||"").toString()});return n.$$addBindingClass(r),function(e,r,i){n.$$addBindingInfo(r,i.ngBindHtml),e.$watch(a,function(){r.html(t.getTrustedHtml(o(e))||"")})}}}}],uo=In("",!0),co=In("Odd",0),lo=In("Even",1),fo=wn({compile:function(t,e){e.$set("ngCloak",n),t.removeClass("ng-cloak")}}),ho=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],po={},$o={blur:!0,focus:!0};o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(t){var e=Zt("ng-"+t);po[e]=["$parse","$rootScope",function(n,r){return{restrict:"A",compile:function(i,o){var a=n(o[e],null,!0);return function(e,n){n.on(t,function(n){var i=function(){a(e,{$event:n})};$o[t]&&r.$$phase?e.$evalAsync(i):e.$apply(i)})}}}}]});var vo=["$animate",function(t){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(n,r,i,o,a){var s,u,c;n.$watch(i.ngIf,function(n){n?u||a(function(n,o){u=o,n[n.length++]=e.createComment(" end ngIf: "+i.ngIf+" "),s={clone:n},t.enter(n,r.parent(),r)}):(c&&(c.remove(),c=null),u&&(u.$destroy(),u=null),s&&(c=st(s.clone),t.leave(c).then(function(){c=null}),s=null))})}}}],mo=["$templateRequest","$anchorScroll","$animate","$sce",function(t,e,n,r){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:er.noop,compile:function(i,o){var a=o.ngInclude||o.src,s=o.onload||"",u=o.autoscroll;return function(i,o,c,l,f){var h,p,$,d=0,v=function(){p&&(p.remove(),p=null),h&&(h.$destroy(),h=null),$&&(n.leave($).then(function(){p=null}),p=$,$=null)};i.$watch(r.parseAsResourceUrl(a),function(r){var a=function(){!g(u)||u&&!i.$eval(u)||e()},c=++d;r?(t(r,!0).then(function(t){if(c===d){var e=i.$new();l.template=t;var u=f(e,function(t){v(),n.enter(t,null,o).then(a)});h=e,$=u,h.$emit("$includeContentLoaded",r),i.$eval(s)}},function(){c===d&&(v(),i.$emit("$includeContentError",r))}),i.$emit("$includeContentRequested",r)):(v(),l.template=null)})}}}}],go=["$compile",function(t){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(n,r,i,o){return/SVG/.test(r[0].toString())?(r.empty(),void t(mt(o.template,e).childNodes)(n,function(t){r.append(t)},{futureParentElement:r})):(r.html(o.template),void t(r.contents())(n))}}}],yo=wn({priority:450,compile:function(){return{pre:function(t,e,n){t.$eval(n.ngInit)}}}}),wo=wn({terminal:!0,priority:1e3}),bo=["$locale","$interpolate",function(t,e){var n=/{}/g,r=/^when(Minus)?(.+)$/;return{restrict:"EA",link:function(i,a,s){function u(t){a.text(t||"")}var c,l=s.count,f=s.$attr.when&&a.attr(s.$attr.when),h=s.offset||0,p=i.$eval(f)||{},$={},d=e.startSymbol(),v=e.endSymbol(),m=d+l+"-"+h+v,g=er.noop;o(s,function(t,e){var n=r.exec(e);if(n){var i=(n[1]?"-":"")+Fn(n[2]);p[i]=a.attr(s.$attr[e])}}),o(p,function(t,r){$[r]=e(t.replace(n,m))}),i.$watch(l,function(e){var n=parseFloat(e),r=isNaN(n);r||n in p||(n=t.pluralCat(n-h)),n===c||r&&isNaN(c)||(g(),g=i.$watch($[n],u),c=n)})}}}],xo=["$parse","$animate",function(t,a){var s="$$NG_REMOVED",u=r("ngRepeat"),c=function(t,e,n,r,i,o,a){t[n]=r,i&&(t[i]=o),t.$index=e,t.$first=0===e,t.$last=e===a-1,t.$middle=!(t.$first||t.$last),t.$odd=!(t.$even=0===(1&e))},l=function(t){return t.clone[0]},f=function(t){return t.clone[t.clone.length-1]};return{restrict:"A",multiElement:!0,transclude:"element",priority:1e3,terminal:!0,$$tlb:!0,compile:function(r,h){var p=h.ngRepeat,$=e.createComment(" end ngRepeat: "+p+" "),d=p.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!d)throw u("iexp","Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",p);var v=d[1],m=d[2],g=d[3],y=d[4];if(d=v.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/),!d)throw u("iidexp","'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.",v);var w=d[3]||d[1],b=d[2];if(g&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(g)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(g)))throw u("badident","alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.",g);var x,S,C,A,k={$id:It};return y?x=t(y):(C=function(t,e){return It(e)},A=function(t){return t}),function(t,e,r,h,d){x&&(S=function(e,n,r){return b&&(k[b]=e),k[w]=n,k.$index=r,x(t,k)});var v=ut();t.$watchCollection(m,function(r){var h,m,y,x,k,E,O,T,M,N,V,D,j=e[0],R=ut();if(g&&(t[g]=r),i(r))M=r,T=S||C;else{T=S||A,M=[];for(var P in r)r.hasOwnProperty(P)&&"$"!=P.charAt(0)&&M.push(P);M.sort()}for(x=M.length,V=new Array(x),h=0;x>h;h++)if(k=r===M?h:M[h],E=r[k],O=T(k,E,h),v[O])N=v[O],delete v[O],R[O]=N,V[h]=N;else{if(R[O])throw o(V,function(t){t&&t.scope&&(v[t.id]=t)}),u("dupes","Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}",p,O,E);V[h]={id:O,scope:n,clone:n},R[O]=!0}for(var q in v){if(N=v[q],D=st(N.clone),a.leave(D),D[0].parentNode)for(h=0,m=D.length;m>h;h++)D[h][s]=!0;N.scope.$destroy()}for(h=0;x>h;h++)if(k=r===M?h:M[h],E=r[k],N=V[h],N.scope){y=j;do y=y.nextSibling;while(y&&y[s]);l(N)!=y&&a.move(st(N.clone),null,Gn(j)),j=f(N),c(N.scope,h,w,E,b,k,x)}else d(function(t,e){N.scope=e;var n=$.cloneNode(!1);t[t.length++]=n,a.enter(t,null,Gn(j)),j=n,N.clone=t,R[N.id]=N,c(N.scope,h,w,E,b,k,x)});v=R})}}}}],So="ng-hide",Co="ng-hide-animate",Ao=["$animate",function(t){return{restrict:"A",multiElement:!0,link:function(e,n,r){e.$watch(r.ngShow,function(e){t[e?"removeClass":"addClass"](n,So,{tempClasses:Co})})}}}],ko=["$animate",function(t){return{restrict:"A",multiElement:!0,link:function(e,n,r){e.$watch(r.ngHide,function(e){t[e?"addClass":"removeClass"](n,So,{tempClasses:Co})})}}}],Eo=wn(function(t,e,n){t.$watch(n.ngStyle,function(t,n){n&&t!==n&&o(n,function(t,n){e.css(n,"")}),t&&e.css(t)},!0)}),Oo=["$animate",function(t){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(n,r,i,a){var s=i.ngSwitch||i.on,u=[],c=[],l=[],f=[],h=function(t,e){return function(){t.splice(e,1)}};n.$watch(s,function(n){var r,i;for(r=0,i=l.length;i>r;++r)t.cancel(l[r]);for(l.length=0,r=0,i=f.length;i>r;++r){var s=st(c[r].clone);f[r].$destroy();var p=l[r]=t.leave(s);p.then(h(l,r))}c.length=0,f.length=0,(u=a.cases["!"+n]||a.cases["?"])&&o(u,function(n){n.transclude(function(r,i){f.push(i);var o=n.element;r[r.length++]=e.createComment(" end ngSwitchWhen: ");var a={clone:r};c.push(a),t.enter(r,o.parent(),o)})})})}}}],To=wn({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(t,e,n,r,i){r.cases["!"+n.ngSwitchWhen]=r.cases["!"+n.ngSwitchWhen]||[],r.cases["!"+n.ngSwitchWhen].push({transclude:i,element:e})}}),Mo=wn({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(t,e,n,r,i){r.cases["?"]=r.cases["?"]||[],r.cases["?"].push({transclude:i,element:e})}}),No=wn({restrict:"EAC",link:function(t,e,n,i,o){if(!o)throw r("ngTransclude")("orphan","Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}",B(e));o(function(t){e.empty(),e.append(t)})}}),Vo=["$templateCache",function(t){return{restrict:"E",terminal:!0,compile:function(e,n){if("text/ng-template"==n.type){var r=n.id,i=e[0].text;t.put(r,i)}}}}],Do=r("ngOptions"),jo=v({restrict:"A",terminal:!0}),Ro=["$compile","$parse",function(t,r){var i=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,s={$setViewValue:$};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(t,e,n){var r,i,o=this,a={},u=s;o.databound=n.ngModel,o.init=function(t,e,n){u=t,r=e,i=n},o.addOption=function(e,n){ot(e,'"option value"'),a[e]=!0,u.$viewValue==e&&(t.val(e),i.parent()&&i.remove()),n&&n[0].hasAttribute("selected")&&(n[0].selected=!0)},o.removeOption=function(t){this.hasOption(t)&&(delete a[t],u.$viewValue==t&&this.renderUnknownOption(t))},o.renderUnknownOption=function(e){var n="? "+It(e)+" ?";i.val(n),t.prepend(i),t.val(n),i.prop("selected",!0)},o.hasOption=function(t){return a.hasOwnProperty(t)},e.$on("$destroy",function(){o.renderUnknownOption=$})}],link:function(s,u,c,l){function f(t,e,n,r){n.$render=function(){var t=n.$viewValue;r.hasOption(t)?(A.parent()&&A.remove(),e.val(t),""===t&&$.prop("selected",!0)):m(t)&&$?e.val(""):r.renderUnknownOption(t)},e.on("change",function(){t.$apply(function(){A.parent()&&A.remove(),n.$setViewValue(e.val())})})}function h(t,e,n){var r;n.$render=function(){var t=new Ut(n.$viewValue);o(e.find("option"),function(e){e.selected=g(t.get(e.value))})},t.$watch(function(){q(r,n.$viewValue)||(r=P(n.$viewValue),n.$render())}),e.on("change",function(){t.$apply(function(){var t=[];o(e.find("option"),function(e){e.selected&&t.push(e.value)}),n.$setViewValue(t)})})}function p(e,s,u){function c(t,n,r){return I[E]=r,M&&(I[M]=n),t(e,I)}function l(){e.$apply(function(){var t,n=D(e)||[];if(y)t=[],o(s.val(),function(e){e=R?P[e]:e,t.push(f(e,n[e]))});else{var r=R?P[s.val()]:s.val();t=f(r,n[r])}u.$setViewValue(t),m()})}function f(t,e){if("?"===t)return n;if(""===t)return null;var r=T?T:V;return c(r,t,e)}function h(){var t,n=D(e);if(n&&ir(n)){t=new Array(n.length);for(var r=0,i=n.length;i>r;r++)t[r]=c(k,r,n[r]);return t}if(n){t={};for(var o in n)n.hasOwnProperty(o)&&(t[o]=c(k,o,n[o]))}return t}function p(t){var e;if(y)if(R&&ir(t)){e=new Ut([]);for(var n=0;n<t.length;n++)e.put(c(R,null,t[n]),!0)}else e=new Ut(t);else R&&(t=c(R,null,t));return function(n,r){var i;return i=R?R:T?T:V,y?g(e.remove(c(i,n,r))):t===c(i,n,r)}}function $(){x||(e.$$postDigest(m),x=!0)}function v(t,e,n){t[e]=t[e]||0,t[e]+=n?1:-1}function m(){x=!1;var t,n,r,i,l,f,h,$,m,w,A,E,O,T,V,j,U,_={
"":[]},F=[""],H=u.$viewValue,L=D(e)||[],B=M?a(L):L,z={},W=p(H),G=!1;for(P={},E=0;w=B.length,w>E;E++)h=E,M&&(h=B[E],"$"===h.charAt(0))||($=L[h],t=c(N,h,$)||"",(n=_[t])||(n=_[t]=[],F.push(t)),O=W(h,$),G=G||O,j=c(k,h,$),j=g(j)?j:"",U=R?R(e,I):M?B[E]:E,R&&(P[U]=h),n.push({id:U,label:j,selected:O}));for(y||(b||null===H?_[""].unshift({id:"",label:"",selected:!G}):G||_[""].unshift({id:"?",label:"",selected:!0})),A=0,m=F.length;m>A;A++){for(t=F[A],n=_[t],q.length<=A?(i={element:C.clone().attr("label",t),label:n.label},l=[i],q.push(l),s.append(i.element)):(l=q[A],i=l[0],i.label!=t&&i.element.attr("label",i.label=t)),T=null,E=0,w=n.length;w>E;E++)r=n[E],(f=l[E+1])?(T=f.element,f.label!==r.label&&(v(z,f.label,!1),v(z,r.label,!0),T.text(f.label=r.label),T.prop("label",f.label)),f.id!==r.id&&T.val(f.id=r.id),T[0].selected!==r.selected&&(T.prop("selected",f.selected=r.selected),Wn&&T.prop("selected",f.selected))):(""===r.id&&b?V=b:(V=S.clone()).val(r.id).prop("selected",r.selected).attr("selected",r.selected).prop("label",r.label).text(r.label),l.push(f={element:V,label:r.label,id:r.id,selected:r.selected}),v(z,r.label,!0),T?T.after(V):i.element.append(V),T=V);for(E++;l.length>E;)r=l.pop(),v(z,r.label,!1),r.element.remove();o(z,function(t,e){t>0?d.addOption(e):0>t&&d.removeOption(e)})}for(;q.length>A;)q.pop()[0].element.remove()}var A;if(!(A=w.match(i)))throw Do("iexp","Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}",w,B(s));var k=r(A[2]||A[1]),E=A[4]||A[6],O=/ as /.test(A[0])&&A[1],T=O?r(O):null,M=A[5],N=r(A[3]||""),V=r(A[2]?A[1]:E),D=r(A[7]),j=A[8],R=j?r(A[8]):null,P={},q=[[{element:s,label:""}]],I={};b&&(t(b)(e),b.removeClass("ng-scope"),b.remove()),s.empty(),s.on("change",l),u.$render=m,e.$watchCollection(D,$),e.$watchCollection(h,$),y&&e.$watchCollection(function(){return u.$modelValue},$)}if(l[1]){for(var $,d=l[0],v=l[1],y=c.multiple,w=c.ngOptions,b=!1,x=!1,S=Gn(e.createElement("option")),C=Gn(e.createElement("optgroup")),A=S.clone(),k=0,E=u.children(),O=E.length;O>k;k++)if(""===E[k].value){$=b=E.eq(k);break}d.init(v,b,A),y&&(v.$isEmpty=function(t){return!t||0===t.length}),w?p(s,u,v):y?h(s,u,v):f(s,u,v,d)}}}}],Po=["$interpolate",function(t){var e={addOption:$,removeOption:$};return{restrict:"E",priority:100,compile:function(n,r){if(m(r.value)){var i=t(n.text(),!0);i||r.$set("value",n.text())}return function(t,n,r){var o="$selectController",a=n.parent(),s=a.data(o)||a.parent().data(o);s&&s.databound||(s=e),i?t.$watch(i,function(t,e){r.$set("value",t),e!==t&&s.removeOption(e),s.addOption(t,n)}):s.addOption(r.value,n),n.on("$destroy",function(){s.removeOption(r.value)})}}}}],qo=v({restrict:"E",terminal:!1});return t.angular.bootstrap?void console.log("WARNING: Tried to load angular more than once."):(nt(),ht(er),void Gn(e).ready(function(){K(e,X)}))}(window,document),!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
!function(e,r,t){"use strict";function n(){function e(e,t){return r.extend(Object.create(e),t)}function t(e,r){var t=r.caseInsensitiveMatch,n={originalPath:e,regexp:e},a=n.keys=[];return e=e.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(e,r,t,n){var o="?"===n?n:null,i="*"===n?n:null;return a.push({name:t,optional:!!o}),r=r||"",""+(o?"":r)+"(?:"+(o?r:"")+(i&&"(.+?)"||"([^/]+)")+(o||"")+")"+(o||"")}).replace(/([\/$\*])/g,"\\$1"),n.regexp=new RegExp("^"+e+"$",t?"i":""),n}var n={};this.when=function(e,a){var o=r.copy(a);if(r.isUndefined(o.reloadOnSearch)&&(o.reloadOnSearch=!0),r.isUndefined(o.caseInsensitiveMatch)&&(o.caseInsensitiveMatch=this.caseInsensitiveMatch),n[e]=r.extend(o,e&&t(e,o)),e){var i="/"==e[e.length-1]?e.substr(0,e.length-1):e+"/";n[i]=r.extend({redirectTo:e},t(i,o))}return this},this.caseInsensitiveMatch=!1,this.otherwise=function(e){return"string"==typeof e&&(e={redirectTo:e}),this.when(null,e),this},this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(t,a,o,i,c,l,s){function h(e,r){var t=r.keys,n={};if(!r.regexp)return null;var a=r.regexp.exec(e);if(!a)return null;for(var o=1,i=a.length;i>o;++o){var c=t[o-1],u=a[o];c&&u&&(n[c.name]=u)}return n}function $(e){var n=w.current;v=f(),m=v&&n&&v.$$route===n.$$route&&r.equals(v.pathParams,n.pathParams)&&!v.reloadOnSearch&&!g,m||!n&&!v||t.$broadcast("$routeChangeStart",v,n).defaultPrevented&&e&&e.preventDefault()}function p(){var e=w.current,n=v;m?(e.params=n.params,r.copy(e.params,o),t.$broadcast("$routeUpdate",e)):(n||e)&&(g=!1,w.current=n,n&&n.redirectTo&&(r.isString(n.redirectTo)?a.path(d(n.redirectTo,n.params)).search(n.params).replace():a.url(n.redirectTo(n.pathParams,a.path(),a.search())).replace()),i.when(n).then(function(){if(n){var e,t,a=r.extend({},n.resolve);return r.forEach(a,function(e,t){a[t]=r.isString(e)?c.get(e):c.invoke(e,null,null,t)}),r.isDefined(e=n.template)?r.isFunction(e)&&(e=e(n.params)):r.isDefined(t=n.templateUrl)&&(r.isFunction(t)&&(t=t(n.params)),r.isDefined(t)&&(n.loadedTemplateUrl=s.valueOf(t),e=l(t))),r.isDefined(e)&&(a.$template=e),i.all(a)}}).then(function(a){n==w.current&&(n&&(n.locals=a,r.copy(n.params,o)),t.$broadcast("$routeChangeSuccess",n,e))},function(r){n==w.current&&t.$broadcast("$routeChangeError",n,e,r)}))}function f(){var t,o;return r.forEach(n,function(n,i){!o&&(t=h(a.path(),n))&&(o=e(n,{params:r.extend({},a.search(),t),pathParams:t}),o.$$route=n)}),o||n[null]&&e(n[null],{params:{},pathParams:{}})}function d(e,t){var n=[];return r.forEach((e||"").split(":"),function(e,r){if(0===r)n.push(e);else{var a=e.match(/(\w+)(?:[?*])?(.*)/),o=a[1];n.push(t[o]),n.push(a[2]||""),delete t[o]}}),n.join("")}var v,m,g=!1,w={routes:n,reload:function(){g=!0,t.$evalAsync(function(){$(),p()})},updateParams:function(e){if(!this.current||!this.current.$$route)throw u("norout","Tried updating route when with no current route");e=r.extend({},this.current.params,e),a.path(d(this.current.$$route.originalPath,e)),a.search(e)}};return t.$on("$locationChangeStart",$),t.$on("$locationChangeSuccess",p),w}]}function a(){this.$get=function(){return{}}}function o(e,t,n){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,o,i,c,u){function l(){p&&(n.cancel(p),p=null),h&&(h.$destroy(),h=null),$&&(p=n.leave($),p.then(function(){p=null}),$=null)}function s(){var i=e.current&&e.current.locals,c=i&&i.$template;if(r.isDefined(c)){var s=a.$new(),p=e.current,v=u(s,function(e){n.enter(e,null,$||o).then(function(){!r.isDefined(f)||f&&!a.$eval(f)||t()}),l()});$=v,h=p.scope=s,h.$emit("$viewContentLoaded"),h.$eval(d)}else l()}var h,$,p,f=i.autoscroll,d=i.onload||"";a.$on("$routeChangeSuccess",s),s()}}}function i(e,r,t){return{restrict:"ECA",priority:-400,link:function(n,a){var o=t.current,i=o.locals;a.html(i.$template);var c=e(a.contents());if(o.controller){i.$scope=n;var u=r(o.controller,i);o.controllerAs&&(n[o.controllerAs]=u),a.data("$ngControllerController",u),a.children().data("$ngControllerController",u)}c(n)}}}var c=r.module("ngRoute",["ng"]).provider("$route",n),u=r.$$minErr("ngRoute");c.provider("$routeParams",a),c.directive("ngView",o),c.directive("ngView",i),o.$inject=["$route","$anchorScroll","$animate"],i.$inject=["$compile","$controller","$route"]}(window,window.angular);
!function(r,e,t){"use strict";function a(r,t){t=t||{},e.forEach(t,function(r,e){delete t[e]});for(var a in r)!r.hasOwnProperty(a)||"$"===a.charAt(0)&&"$"===a.charAt(1)||(t[a]=r[a]);return t}var n=e.$$minErr("$resource"),o=/^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;e.module("ngResource",["ng"]).factory("$resource",["$http","$q",function(r,i){function s(r,e){this.template=r,this.defaults=e||{},this.urlParams={}}function c(d,$,g){function v(r,e){var a={};return e=f({},$,e),l(e,function(e,i){m(e)&&(e=e());var s;if(e&&e.charAt&&"@"==e.charAt(0)){s=r;var c=e.substr(1);if(null==c||""===c||"hasOwnProperty"===c||!o.test("."+c))throw n("badmember",c);for(var c=c.split("."),u=0,p=c.length;p>u&&s!==t;u++){var l=c[u];s=null!==s?s[l]:t}}else s=e;a[i]=s}),a}function y(r){return r.resource}function w(r){a(r||{},this)}var A=new s(d);return g=f({},u,g),l(g,function(o,s){var c=/^(POST|PUT|PATCH)$/i.test(o.method);w[s]=function(s,u,d,$){var g,E,P,b={};switch(arguments.length){case 4:P=$,E=d;case 3:case 2:if(!m(u)){b=s,g=u,E=d;break}if(m(s)){E=s,P=u;break}E=u,P=d;case 1:m(s)?E=s:c?g=s:b=s;break;case 0:break;default:throw n("badargs",arguments.length)}var T=this instanceof w,O=T?g:o.isArray?[]:new w(g),R={},k=o.interceptor&&o.interceptor.response||y,x=o.interceptor&&o.interceptor.responseError||t;return l(o,function(r,e){"params"!=e&&"isArray"!=e&&"interceptor"!=e&&(R[e]=h(r))}),c&&(R.data=g),A.setUrlParams(R,f({},v(g,o.params||{}),b),o.url),b=r(R).then(function(r){var t=r.data,i=O.$promise;if(t){if(e.isArray(t)!==!!o.isArray)throw n("badcfg",o.isArray?"array":"object",e.isArray(t)?"array":"object");o.isArray?(O.length=0,l(t,function(r){O.push(new w(r))})):(a(t,O),O.$promise=i)}return O.$resolved=!0,r.resource=O,r},function(r){return O.$resolved=!0,(P||p)(r),i.reject(r)}),b=b.then(function(r){var e=k(r);return(E||p)(e,r.headers),e},x),T?b:(O.$promise=b,O.$resolved=!1,O)},w.prototype["$"+s]=function(r,e,t){return m(r)&&(t=e,e=r,r={}),r=w[s].call(this,r,this,e,t),r.$promise||r}}),w.bind=function(r){return c(d,f({},$,r),g)},w}var u={get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}},p=e.noop,l=e.forEach,f=e.extend,h=e.copy,m=e.isFunction;return s.prototype={setUrlParams:function(r,t,a){var o,i,s=this,c=a||s.template,u=s.urlParams={};l(c.split(/\W/),function(r){if("hasOwnProperty"===r)throw n("badname");!/^\d+$/.test(r)&&r&&RegExp("(^|[^\\\\]):"+r+"(\\W|$)").test(c)&&(u[r]=!0)}),c=c.replace(/\\:/g,":"),t=t||{},l(s.urlParams,function(r,a){o=t.hasOwnProperty(a)?t[a]:s.defaults[a],e.isDefined(o)&&null!==o?(i=encodeURIComponent(o).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"%20").replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+"),c=c.replace(RegExp(":"+a+"(\\W|$)","g"),function(r,e){return i+e})):c=c.replace(RegExp("(/?):"+a+"(\\W|$)","g"),function(r,e,t){return"/"==t.charAt(0)?t:e+t})}),c=c.replace(/\/+$/,"")||"/",c=c.replace(/\/\.(?=\w+($|\?))/,"."),r.url=c.replace(/\/\\\./,"/."),l(t,function(e,t){s.urlParams[t]||(r.params=r.params||{},r.params[t]=e)})}},c}])}(window,window.angular);
!function(){var e=angular.module("experienceDateFilter",[]),n=function(){return function(e){return e.substring(0,15)}};e.filter("experienceDate",n)}();
/**
 * @license AngularJS v1.4.7
 * (c) 2010-2015 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {

'use strict';

/**
 * @ngdoc object
 * @name angular.mock
 * @description
 *
 * Namespace from 'angular-mocks.js' which contains testing related code.
 */
angular.mock = {};

/**
 * ! This is a private undocumented service !
 *
 * @name $browser
 *
 * @description
 * This service is a mock implementation of {@link ng.$browser}. It provides fake
 * implementation for commonly used browser apis that are hard to test, e.g. setTimeout, xhr,
 * cookies, etc...
 *
 * The api of this service is the same as that of the real {@link ng.$browser $browser}, except
 * that there are several helper methods available which can be used in tests.
 */
angular.mock.$BrowserProvider = function() {
  this.$get = function() {
    return new angular.mock.$Browser();
  };
};

angular.mock.$Browser = function() {
  var self = this;

  this.isMock = true;
  self.$$url = "http://server/";
  self.$$lastUrl = self.$$url; // used by url polling fn
  self.pollFns = [];

  // TODO(vojta): remove this temporary api
  self.$$completeOutstandingRequest = angular.noop;
  self.$$incOutstandingRequestCount = angular.noop;


  // register url polling fn

  self.onUrlChange = function(listener) {
    self.pollFns.push(
      function() {
        if (self.$$lastUrl !== self.$$url || self.$$state !== self.$$lastState) {
          self.$$lastUrl = self.$$url;
          self.$$lastState = self.$$state;
          listener(self.$$url, self.$$state);
        }
      }
    );

    return listener;
  };

  self.$$applicationDestroyed = angular.noop;
  self.$$checkUrlChange = angular.noop;

  self.deferredFns = [];
  self.deferredNextId = 0;

  self.defer = function(fn, delay) {
    delay = delay || 0;
    self.deferredFns.push({time:(self.defer.now + delay), fn:fn, id: self.deferredNextId});
    self.deferredFns.sort(function(a, b) { return a.time - b.time;});
    return self.deferredNextId++;
  };


  /**
   * @name $browser#defer.now
   *
   * @description
   * Current milliseconds mock time.
   */
  self.defer.now = 0;


  self.defer.cancel = function(deferId) {
    var fnIndex;

    angular.forEach(self.deferredFns, function(fn, index) {
      if (fn.id === deferId) fnIndex = index;
    });

    if (angular.isDefined(fnIndex)) {
      self.deferredFns.splice(fnIndex, 1);
      return true;
    }

    return false;
  };


  /**
   * @name $browser#defer.flush
   *
   * @description
   * Flushes all pending requests and executes the defer callbacks.
   *
   * @param {number=} number of milliseconds to flush. See {@link #defer.now}
   */
  self.defer.flush = function(delay) {
    if (angular.isDefined(delay)) {
      self.defer.now += delay;
    } else {
      if (self.deferredFns.length) {
        self.defer.now = self.deferredFns[self.deferredFns.length - 1].time;
      } else {
        throw new Error('No deferred tasks to be flushed');
      }
    }

    while (self.deferredFns.length && self.deferredFns[0].time <= self.defer.now) {
      self.deferredFns.shift().fn();
    }
  };

  self.$$baseHref = '/';
  self.baseHref = function() {
    return this.$$baseHref;
  };
};
angular.mock.$Browser.prototype = {

/**
  * @name $browser#poll
  *
  * @description
  * run all fns in pollFns
  */
  poll: function poll() {
    angular.forEach(this.pollFns, function(pollFn) {
      pollFn();
    });
  },

  url: function(url, replace, state) {
    if (angular.isUndefined(state)) {
      state = null;
    }
    if (url) {
      this.$$url = url;
      // Native pushState serializes & copies the object; simulate it.
      this.$$state = angular.copy(state);
      return this;
    }

    return this.$$url;
  },

  state: function() {
    return this.$$state;
  },

  notifyWhenNoOutstandingRequests: function(fn) {
    fn();
  }
};


/**
 * @ngdoc provider
 * @name $exceptionHandlerProvider
 *
 * @description
 * Configures the mock implementation of {@link ng.$exceptionHandler} to rethrow or to log errors
 * passed to the `$exceptionHandler`.
 */

/**
 * @ngdoc service
 * @name $exceptionHandler
 *
 * @description
 * Mock implementation of {@link ng.$exceptionHandler} that rethrows or logs errors passed
 * to it. See {@link ngMock.$exceptionHandlerProvider $exceptionHandlerProvider} for configuration
 * information.
 *
 *
 * ```js
 *   describe('$exceptionHandlerProvider', function() {
 *
 *     it('should capture log messages and exceptions', function() {
 *
 *       module(function($exceptionHandlerProvider) {
 *         $exceptionHandlerProvider.mode('log');
 *       });
 *
 *       inject(function($log, $exceptionHandler, $timeout) {
 *         $timeout(function() { $log.log(1); });
 *         $timeout(function() { $log.log(2); throw 'banana peel'; });
 *         $timeout(function() { $log.log(3); });
 *         expect($exceptionHandler.errors).toEqual([]);
 *         expect($log.assertEmpty());
 *         $timeout.flush();
 *         expect($exceptionHandler.errors).toEqual(['banana peel']);
 *         expect($log.log.logs).toEqual([[1], [2], [3]]);
 *       });
 *     });
 *   });
 * ```
 */

angular.mock.$ExceptionHandlerProvider = function() {
  var handler;

  /**
   * @ngdoc method
   * @name $exceptionHandlerProvider#mode
   *
   * @description
   * Sets the logging mode.
   *
   * @param {string} mode Mode of operation, defaults to `rethrow`.
   *
   *   - `log`: Sometimes it is desirable to test that an error is thrown, for this case the `log`
   *            mode stores an array of errors in `$exceptionHandler.errors`, to allow later
   *            assertion of them. See {@link ngMock.$log#assertEmpty assertEmpty()} and
   *            {@link ngMock.$log#reset reset()}
   *   - `rethrow`: If any errors are passed to the handler in tests, it typically means that there
   *                is a bug in the application or test, so this mock will make these tests fail.
   *                For any implementations that expect exceptions to be thrown, the `rethrow` mode
   *                will also maintain a log of thrown errors.
   */
  this.mode = function(mode) {

    switch (mode) {
      case 'log':
      case 'rethrow':
        var errors = [];
        handler = function(e) {
          if (arguments.length == 1) {
            errors.push(e);
          } else {
            errors.push([].slice.call(arguments, 0));
          }
          if (mode === "rethrow") {
            throw e;
          }
        };
        handler.errors = errors;
        break;
      default:
        throw new Error("Unknown mode '" + mode + "', only 'log'/'rethrow' modes are allowed!");
    }
  };

  this.$get = function() {
    return handler;
  };

  this.mode('rethrow');
};


/**
 * @ngdoc service
 * @name $log
 *
 * @description
 * Mock implementation of {@link ng.$log} that gathers all logged messages in arrays
 * (one array per logging level). These arrays are exposed as `logs` property of each of the
 * level-specific log function, e.g. for level `error` the array is exposed as `$log.error.logs`.
 *
 */
angular.mock.$LogProvider = function() {
  var debug = true;

  function concat(array1, array2, index) {
    return array1.concat(Array.prototype.slice.call(array2, index));
  }

  this.debugEnabled = function(flag) {
    if (angular.isDefined(flag)) {
      debug = flag;
      return this;
    } else {
      return debug;
    }
  };

  this.$get = function() {
    var $log = {
      log: function() { $log.log.logs.push(concat([], arguments, 0)); },
      warn: function() { $log.warn.logs.push(concat([], arguments, 0)); },
      info: function() { $log.info.logs.push(concat([], arguments, 0)); },
      error: function() { $log.error.logs.push(concat([], arguments, 0)); },
      debug: function() {
        if (debug) {
          $log.debug.logs.push(concat([], arguments, 0));
        }
      }
    };

    /**
     * @ngdoc method
     * @name $log#reset
     *
     * @description
     * Reset all of the logging arrays to empty.
     */
    $log.reset = function() {
      /**
       * @ngdoc property
       * @name $log#log.logs
       *
       * @description
       * Array of messages logged using {@link ng.$log#log `log()`}.
       *
       * @example
       * ```js
       * $log.log('Some Log');
       * var first = $log.log.logs.unshift();
       * ```
       */
      $log.log.logs = [];
      /**
       * @ngdoc property
       * @name $log#info.logs
       *
       * @description
       * Array of messages logged using {@link ng.$log#info `info()`}.
       *
       * @example
       * ```js
       * $log.info('Some Info');
       * var first = $log.info.logs.unshift();
       * ```
       */
      $log.info.logs = [];
      /**
       * @ngdoc property
       * @name $log#warn.logs
       *
       * @description
       * Array of messages logged using {@link ng.$log#warn `warn()`}.
       *
       * @example
       * ```js
       * $log.warn('Some Warning');
       * var first = $log.warn.logs.unshift();
       * ```
       */
      $log.warn.logs = [];
      /**
       * @ngdoc property
       * @name $log#error.logs
       *
       * @description
       * Array of messages logged using {@link ng.$log#error `error()`}.
       *
       * @example
       * ```js
       * $log.error('Some Error');
       * var first = $log.error.logs.unshift();
       * ```
       */
      $log.error.logs = [];
        /**
       * @ngdoc property
       * @name $log#debug.logs
       *
       * @description
       * Array of messages logged using {@link ng.$log#debug `debug()`}.
       *
       * @example
       * ```js
       * $log.debug('Some Error');
       * var first = $log.debug.logs.unshift();
       * ```
       */
      $log.debug.logs = [];
    };

    /**
     * @ngdoc method
     * @name $log#assertEmpty
     *
     * @description
     * Assert that all of the logging methods have no logged messages. If any messages are present,
     * an exception is thrown.
     */
    $log.assertEmpty = function() {
      var errors = [];
      angular.forEach(['error', 'warn', 'info', 'log', 'debug'], function(logLevel) {
        angular.forEach($log[logLevel].logs, function(log) {
          angular.forEach(log, function(logItem) {
            errors.push('MOCK $log (' + logLevel + '): ' + String(logItem) + '\n' +
                        (logItem.stack || ''));
          });
        });
      });
      if (errors.length) {
        errors.unshift("Expected $log to be empty! Either a message was logged unexpectedly, or " +
          "an expected log message was not checked and removed:");
        errors.push('');
        throw new Error(errors.join('\n---------\n'));
      }
    };

    $log.reset();
    return $log;
  };
};


/**
 * @ngdoc service
 * @name $interval
 *
 * @description
 * Mock implementation of the $interval service.
 *
 * Use {@link ngMock.$interval#flush `$interval.flush(millis)`} to
 * move forward by `millis` milliseconds and trigger any functions scheduled to run in that
 * time.
 *
 * @param {function()} fn A function that should be called repeatedly.
 * @param {number} delay Number of milliseconds between each function call.
 * @param {number=} [count=0] Number of times to repeat. If not set, or 0, will repeat
 *   indefinitely.
 * @param {boolean=} [invokeApply=true] If set to `false` skips model dirty checking, otherwise
 *   will invoke `fn` within the {@link ng.$rootScope.Scope#$apply $apply} block.
 * @param {...*=} Pass additional parameters to the executed function.
 * @returns {promise} A promise which will be notified on each iteration.
 */
angular.mock.$IntervalProvider = function() {
  this.$get = ['$browser', '$rootScope', '$q', '$$q',
       function($browser,   $rootScope,   $q,   $$q) {
    var repeatFns = [],
        nextRepeatId = 0,
        now = 0;

    var $interval = function(fn, delay, count, invokeApply) {
      var hasParams = arguments.length > 4,
          args = hasParams ? Array.prototype.slice.call(arguments, 4) : [],
          iteration = 0,
          skipApply = (angular.isDefined(invokeApply) && !invokeApply),
          deferred = (skipApply ? $$q : $q).defer(),
          promise = deferred.promise;

      count = (angular.isDefined(count)) ? count : 0;
      promise.then(null, null, (!hasParams) ? fn : function() {
        fn.apply(null, args);
      });

      promise.$$intervalId = nextRepeatId;

      function tick() {
        deferred.notify(iteration++);

        if (count > 0 && iteration >= count) {
          var fnIndex;
          deferred.resolve(iteration);

          angular.forEach(repeatFns, function(fn, index) {
            if (fn.id === promise.$$intervalId) fnIndex = index;
          });

          if (angular.isDefined(fnIndex)) {
            repeatFns.splice(fnIndex, 1);
          }
        }

        if (skipApply) {
          $browser.defer.flush();
        } else {
          $rootScope.$apply();
        }
      }

      repeatFns.push({
        nextTime:(now + delay),
        delay: delay,
        fn: tick,
        id: nextRepeatId,
        deferred: deferred
      });
      repeatFns.sort(function(a, b) { return a.nextTime - b.nextTime;});

      nextRepeatId++;
      return promise;
    };
    /**
     * @ngdoc method
     * @name $interval#cancel
     *
     * @description
     * Cancels a task associated with the `promise`.
     *
     * @param {promise} promise A promise from calling the `$interval` function.
     * @returns {boolean} Returns `true` if the task was successfully cancelled.
     */
    $interval.cancel = function(promise) {
      if (!promise) return false;
      var fnIndex;

      angular.forEach(repeatFns, function(fn, index) {
        if (fn.id === promise.$$intervalId) fnIndex = index;
      });

      if (angular.isDefined(fnIndex)) {
        repeatFns[fnIndex].deferred.reject('canceled');
        repeatFns.splice(fnIndex, 1);
        return true;
      }

      return false;
    };

    /**
     * @ngdoc method
     * @name $interval#flush
     * @description
     *
     * Runs interval tasks scheduled to be run in the next `millis` milliseconds.
     *
     * @param {number=} millis maximum timeout amount to flush up until.
     *
     * @return {number} The amount of time moved forward.
     */
    $interval.flush = function(millis) {
      now += millis;
      while (repeatFns.length && repeatFns[0].nextTime <= now) {
        var task = repeatFns[0];
        task.fn();
        task.nextTime += task.delay;
        repeatFns.sort(function(a, b) { return a.nextTime - b.nextTime;});
      }
      return millis;
    };

    return $interval;
  }];
};


/* jshint -W101 */
/* The R_ISO8061_STR regex is never going to fit into the 100 char limit!
 * This directive should go inside the anonymous function but a bug in JSHint means that it would
 * not be enacted early enough to prevent the warning.
 */
var R_ISO8061_STR = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?:\:?(\d\d)(?:\:?(\d\d)(?:\.(\d{3}))?)?)?(Z|([+-])(\d\d):?(\d\d)))?$/;

function jsonStringToDate(string) {
  var match;
  if (match = string.match(R_ISO8061_STR)) {
    var date = new Date(0),
        tzHour = 0,
        tzMin  = 0;
    if (match[9]) {
      tzHour = toInt(match[9] + match[10]);
      tzMin = toInt(match[9] + match[11]);
    }
    date.setUTCFullYear(toInt(match[1]), toInt(match[2]) - 1, toInt(match[3]));
    date.setUTCHours(toInt(match[4] || 0) - tzHour,
                     toInt(match[5] || 0) - tzMin,
                     toInt(match[6] || 0),
                     toInt(match[7] || 0));
    return date;
  }
  return string;
}

function toInt(str) {
  return parseInt(str, 10);
}

function padNumber(num, digits, trim) {
  var neg = '';
  if (num < 0) {
    neg =  '-';
    num = -num;
  }
  num = '' + num;
  while (num.length < digits) num = '0' + num;
  if (trim) {
    num = num.substr(num.length - digits);
  }
  return neg + num;
}


/**
 * @ngdoc type
 * @name angular.mock.TzDate
 * @description
 *
 * *NOTE*: this is not an injectable instance, just a globally available mock class of `Date`.
 *
 * Mock of the Date type which has its timezone specified via constructor arg.
 *
 * The main purpose is to create Date-like instances with timezone fixed to the specified timezone
 * offset, so that we can test code that depends on local timezone settings without dependency on
 * the time zone settings of the machine where the code is running.
 *
 * @param {number} offset Offset of the *desired* timezone in hours (fractions will be honored)
 * @param {(number|string)} timestamp Timestamp representing the desired time in *UTC*
 *
 * @example
 * !!!! WARNING !!!!!
 * This is not a complete Date object so only methods that were implemented can be called safely.
 * To make matters worse, TzDate instances inherit stuff from Date via a prototype.
 *
 * We do our best to intercept calls to "unimplemented" methods, but since the list of methods is
 * incomplete we might be missing some non-standard methods. This can result in errors like:
 * "Date.prototype.foo called on incompatible Object".
 *
 * ```js
 * var newYearInBratislava = new TzDate(-1, '2009-12-31T23:00:00Z');
 * newYearInBratislava.getTimezoneOffset() => -60;
 * newYearInBratislava.getFullYear() => 2010;
 * newYearInBratislava.getMonth() => 0;
 * newYearInBratislava.getDate() => 1;
 * newYearInBratislava.getHours() => 0;
 * newYearInBratislava.getMinutes() => 0;
 * newYearInBratislava.getSeconds() => 0;
 * ```
 *
 */
angular.mock.TzDate = function(offset, timestamp) {
  var self = new Date(0);
  if (angular.isString(timestamp)) {
    var tsStr = timestamp;

    self.origDate = jsonStringToDate(timestamp);

    timestamp = self.origDate.getTime();
    if (isNaN(timestamp)) {
      throw {
        name: "Illegal Argument",
        message: "Arg '" + tsStr + "' passed into TzDate constructor is not a valid date string"
      };
    }
  } else {
    self.origDate = new Date(timestamp);
  }

  var localOffset = new Date(timestamp).getTimezoneOffset();
  self.offsetDiff = localOffset * 60 * 1000 - offset * 1000 * 60 * 60;
  self.date = new Date(timestamp + self.offsetDiff);

  self.getTime = function() {
    return self.date.getTime() - self.offsetDiff;
  };

  self.toLocaleDateString = function() {
    return self.date.toLocaleDateString();
  };

  self.getFullYear = function() {
    return self.date.getFullYear();
  };

  self.getMonth = function() {
    return self.date.getMonth();
  };

  self.getDate = function() {
    return self.date.getDate();
  };

  self.getHours = function() {
    return self.date.getHours();
  };

  self.getMinutes = function() {
    return self.date.getMinutes();
  };

  self.getSeconds = function() {
    return self.date.getSeconds();
  };

  self.getMilliseconds = function() {
    return self.date.getMilliseconds();
  };

  self.getTimezoneOffset = function() {
    return offset * 60;
  };

  self.getUTCFullYear = function() {
    return self.origDate.getUTCFullYear();
  };

  self.getUTCMonth = function() {
    return self.origDate.getUTCMonth();
  };

  self.getUTCDate = function() {
    return self.origDate.getUTCDate();
  };

  self.getUTCHours = function() {
    return self.origDate.getUTCHours();
  };

  self.getUTCMinutes = function() {
    return self.origDate.getUTCMinutes();
  };

  self.getUTCSeconds = function() {
    return self.origDate.getUTCSeconds();
  };

  self.getUTCMilliseconds = function() {
    return self.origDate.getUTCMilliseconds();
  };

  self.getDay = function() {
    return self.date.getDay();
  };

  // provide this method only on browsers that already have it
  if (self.toISOString) {
    self.toISOString = function() {
      return padNumber(self.origDate.getUTCFullYear(), 4) + '-' +
            padNumber(self.origDate.getUTCMonth() + 1, 2) + '-' +
            padNumber(self.origDate.getUTCDate(), 2) + 'T' +
            padNumber(self.origDate.getUTCHours(), 2) + ':' +
            padNumber(self.origDate.getUTCMinutes(), 2) + ':' +
            padNumber(self.origDate.getUTCSeconds(), 2) + '.' +
            padNumber(self.origDate.getUTCMilliseconds(), 3) + 'Z';
    };
  }

  //hide all methods not implemented in this mock that the Date prototype exposes
  var unimplementedMethods = ['getUTCDay',
      'getYear', 'setDate', 'setFullYear', 'setHours', 'setMilliseconds',
      'setMinutes', 'setMonth', 'setSeconds', 'setTime', 'setUTCDate', 'setUTCFullYear',
      'setUTCHours', 'setUTCMilliseconds', 'setUTCMinutes', 'setUTCMonth', 'setUTCSeconds',
      'setYear', 'toDateString', 'toGMTString', 'toJSON', 'toLocaleFormat', 'toLocaleString',
      'toLocaleTimeString', 'toSource', 'toString', 'toTimeString', 'toUTCString', 'valueOf'];

  angular.forEach(unimplementedMethods, function(methodName) {
    self[methodName] = function() {
      throw new Error("Method '" + methodName + "' is not implemented in the TzDate mock");
    };
  });

  return self;
};

//make "tzDateInstance instanceof Date" return true
angular.mock.TzDate.prototype = Date.prototype;
/* jshint +W101 */

angular.mock.animate = angular.module('ngAnimateMock', ['ng'])

  .config(['$provide', function($provide) {

    $provide.factory('$$forceReflow', function() {
      function reflowFn() {
        reflowFn.totalReflows++;
      }
      reflowFn.totalReflows = 0;
      return reflowFn;
    });

    $provide.factory('$$animateAsyncRun', function() {
      var queue = [];
      var queueFn = function() {
        return function(fn) {
          queue.push(fn);
        };
      };
      queueFn.flush = function() {
        if (queue.length === 0) return false;

        for (var i = 0; i < queue.length; i++) {
          queue[i]();
        }
        queue = [];

        return true;
      };
      return queueFn;
    });

    $provide.decorator('$animate', ['$delegate', '$timeout', '$browser', '$$rAF',
                                    '$$forceReflow', '$$animateAsyncRun', '$rootScope',
                            function($delegate,   $timeout,   $browser,   $$rAF,
                                     $$forceReflow,   $$animateAsyncRun,  $rootScope) {
      var animate = {
        queue: [],
        cancel: $delegate.cancel,
        on: $delegate.on,
        off: $delegate.off,
        pin: $delegate.pin,
        get reflows() {
          return $$forceReflow.totalReflows;
        },
        enabled: $delegate.enabled,
        flush: function() {
          $rootScope.$digest();

          var doNextRun, somethingFlushed = false;
          do {
            doNextRun = false;

            if ($$rAF.queue.length) {
              $$rAF.flush();
              doNextRun = somethingFlushed = true;
            }

            if ($$animateAsyncRun.flush()) {
              doNextRun = somethingFlushed = true;
            }
          } while (doNextRun);

          if (!somethingFlushed) {
            throw new Error('No pending animations ready to be closed or flushed');
          }

          $rootScope.$digest();
        }
      };

      angular.forEach(
        ['animate','enter','leave','move','addClass','removeClass','setClass'], function(method) {
        animate[method] = function() {
          animate.queue.push({
            event: method,
            element: arguments[0],
            options: arguments[arguments.length - 1],
            args: arguments
          });
          return $delegate[method].apply($delegate, arguments);
        };
      });

      return animate;
    }]);

  }]);


/**
 * @ngdoc function
 * @name angular.mock.dump
 * @description
 *
 * *NOTE*: this is not an injectable instance, just a globally available function.
 *
 * Method for serializing common angular objects (scope, elements, etc..) into strings, useful for
 * debugging.
 *
 * This method is also available on window, where it can be used to display objects on debug
 * console.
 *
 * @param {*} object - any object to turn into string.
 * @return {string} a serialized string of the argument
 */
angular.mock.dump = function(object) {
  return serialize(object);

  function serialize(object) {
    var out;

    if (angular.isElement(object)) {
      object = angular.element(object);
      out = angular.element('<div></div>');
      angular.forEach(object, function(element) {
        out.append(angular.element(element).clone());
      });
      out = out.html();
    } else if (angular.isArray(object)) {
      out = [];
      angular.forEach(object, function(o) {
        out.push(serialize(o));
      });
      out = '[ ' + out.join(', ') + ' ]';
    } else if (angular.isObject(object)) {
      if (angular.isFunction(object.$eval) && angular.isFunction(object.$apply)) {
        out = serializeScope(object);
      } else if (object instanceof Error) {
        out = object.stack || ('' + object.name + ': ' + object.message);
      } else {
        // TODO(i): this prevents methods being logged,
        // we should have a better way to serialize objects
        out = angular.toJson(object, true);
      }
    } else {
      out = String(object);
    }

    return out;
  }

  function serializeScope(scope, offset) {
    offset = offset ||  '  ';
    var log = [offset + 'Scope(' + scope.$id + '): {'];
    for (var key in scope) {
      if (Object.prototype.hasOwnProperty.call(scope, key) && !key.match(/^(\$|this)/)) {
        log.push('  ' + key + ': ' + angular.toJson(scope[key]));
      }
    }
    var child = scope.$$childHead;
    while (child) {
      log.push(serializeScope(child, offset + '  '));
      child = child.$$nextSibling;
    }
    log.push('}');
    return log.join('\n' + offset);
  }
};

/**
 * @ngdoc service
 * @name $httpBackend
 * @description
 * Fake HTTP backend implementation suitable for unit testing applications that use the
 * {@link ng.$http $http service}.
 *
 * *Note*: For fake HTTP backend implementation suitable for end-to-end testing or backend-less
 * development please see {@link ngMockE2E.$httpBackend e2e $httpBackend mock}.
 *
 * During unit testing, we want our unit tests to run quickly and have no external dependencies so
 * we don’t want to send [XHR](https://developer.mozilla.org/en/xmlhttprequest) or
 * [JSONP](http://en.wikipedia.org/wiki/JSONP) requests to a real server. All we really need is
 * to verify whether a certain request has been sent or not, or alternatively just let the
 * application make requests, respond with pre-trained responses and assert that the end result is
 * what we expect it to be.
 *
 * This mock implementation can be used to respond with static or dynamic responses via the
 * `expect` and `when` apis and their shortcuts (`expectGET`, `whenPOST`, etc).
 *
 * When an Angular application needs some data from a server, it calls the $http service, which
 * sends the request to a real server using $httpBackend service. With dependency injection, it is
 * easy to inject $httpBackend mock (which has the same API as $httpBackend) and use it to verify
 * the requests and respond with some testing data without sending a request to a real server.
 *
 * There are two ways to specify what test data should be returned as http responses by the mock
 * backend when the code under test makes http requests:
 *
 * - `$httpBackend.expect` - specifies a request expectation
 * - `$httpBackend.when` - specifies a backend definition
 *
 *
 * # Request Expectations vs Backend Definitions
 *
 * Request expectations provide a way to make assertions about requests made by the application and
 * to define responses for those requests. The test will fail if the expected requests are not made
 * or they are made in the wrong order.
 *
 * Backend definitions allow you to define a fake backend for your application which doesn't assert
 * if a particular request was made or not, it just returns a trained response if a request is made.
 * The test will pass whether or not the request gets made during testing.
 *
 *
 * <table class="table">
 *   <tr><th width="220px"></th><th>Request expectations</th><th>Backend definitions</th></tr>
 *   <tr>
 *     <th>Syntax</th>
 *     <td>.expect(...).respond(...)</td>
 *     <td>.when(...).respond(...)</td>
 *   </tr>
 *   <tr>
 *     <th>Typical usage</th>
 *     <td>strict unit tests</td>
 *     <td>loose (black-box) unit testing</td>
 *   </tr>
 *   <tr>
 *     <th>Fulfills multiple requests</th>
 *     <td>NO</td>
 *     <td>YES</td>
 *   </tr>
 *   <tr>
 *     <th>Order of requests matters</th>
 *     <td>YES</td>
 *     <td>NO</td>
 *   </tr>
 *   <tr>
 *     <th>Request required</th>
 *     <td>YES</td>
 *     <td>NO</td>
 *   </tr>
 *   <tr>
 *     <th>Response required</th>
 *     <td>optional (see below)</td>
 *     <td>YES</td>
 *   </tr>
 * </table>
 *
 * In cases where both backend definitions and request expectations are specified during unit
 * testing, the request expectations are evaluated first.
 *
 * If a request expectation has no response specified, the algorithm will search your backend
 * definitions for an appropriate response.
 *
 * If a request didn't match any expectation or if the expectation doesn't have the response
 * defined, the backend definitions are evaluated in sequential order to see if any of them match
 * the request. The response from the first matched definition is returned.
 *
 *
 * # Flushing HTTP requests
 *
 * The $httpBackend used in production always responds to requests asynchronously. If we preserved
 * this behavior in unit testing, we'd have to create async unit tests, which are hard to write,
 * to follow and to maintain. But neither can the testing mock respond synchronously; that would
 * change the execution of the code under test. For this reason, the mock $httpBackend has a
 * `flush()` method, which allows the test to explicitly flush pending requests. This preserves
 * the async api of the backend, while allowing the test to execute synchronously.
 *
 *
 * # Unit testing with mock $httpBackend
 * The following code shows how to setup and use the mock backend when unit testing a controller.
 * First we create the controller under test:
 *
  ```js
  // The module code
  angular
    .module('MyApp', [])
    .controller('MyController', MyController);

  // The controller code
  function MyController($scope, $http) {
    var authToken;

    $http.get('/auth.py').success(function(data, status, headers) {
      authToken = headers('A-Token');
      $scope.user = data;
    });

    $scope.saveMessage = function(message) {
      var headers = { 'Authorization': authToken };
      $scope.status = 'Saving...';

      $http.post('/add-msg.py', message, { headers: headers } ).success(function(response) {
        $scope.status = '';
      }).error(function() {
        $scope.status = 'Failed...';
      });
    };
  }
  ```
 *
 * Now we setup the mock backend and create the test specs:
 *
  ```js
    // testing controller
    describe('MyController', function() {
       var $httpBackend, $rootScope, createController, authRequestHandler;

       // Set up the module
       beforeEach(module('MyApp'));

       beforeEach(inject(function($injector) {
         // Set up the mock http service responses
         $httpBackend = $injector.get('$httpBackend');
         // backend definition common for all tests
         authRequestHandler = $httpBackend.when('GET', '/auth.py')
                                .respond({userId: 'userX'}, {'A-Token': 'xxx'});

         // Get hold of a scope (i.e. the root scope)
         $rootScope = $injector.get('$rootScope');
         // The $controller service is used to create instances of controllers
         var $controller = $injector.get('$controller');

         createController = function() {
           return $controller('MyController', {'$scope' : $rootScope });
         };
       }));


       afterEach(function() {
         $httpBackend.verifyNoOutstandingExpectation();
         $httpBackend.verifyNoOutstandingRequest();
       });


       it('should fetch authentication token', function() {
         $httpBackend.expectGET('/auth.py');
         var controller = createController();
         $httpBackend.flush();
       });


       it('should fail authentication', function() {

         // Notice how you can change the response even after it was set
         authRequestHandler.respond(401, '');

         $httpBackend.expectGET('/auth.py');
         var controller = createController();
         $httpBackend.flush();
         expect($rootScope.status).toBe('Failed...');
       });


       it('should send msg to server', function() {
         var controller = createController();
         $httpBackend.flush();

         // now you don’t care about the authentication, but
         // the controller will still send the request and
         // $httpBackend will respond without you having to
         // specify the expectation and response for this request

         $httpBackend.expectPOST('/add-msg.py', 'message content').respond(201, '');
         $rootScope.saveMessage('message content');
         expect($rootScope.status).toBe('Saving...');
         $httpBackend.flush();
         expect($rootScope.status).toBe('');
       });


       it('should send auth header', function() {
         var controller = createController();
         $httpBackend.flush();

         $httpBackend.expectPOST('/add-msg.py', undefined, function(headers) {
           // check if the header was sent, if it wasn't the expectation won't
           // match the request and the test will fail
           return headers['Authorization'] == 'xxx';
         }).respond(201, '');

         $rootScope.saveMessage('whatever');
         $httpBackend.flush();
       });
    });
   ```
 */
angular.mock.$HttpBackendProvider = function() {
  this.$get = ['$rootScope', '$timeout', createHttpBackendMock];
};

/**
 * General factory function for $httpBackend mock.
 * Returns instance for unit testing (when no arguments specified):
 *   - passing through is disabled
 *   - auto flushing is disabled
 *
 * Returns instance for e2e testing (when `$delegate` and `$browser` specified):
 *   - passing through (delegating request to real backend) is enabled
 *   - auto flushing is enabled
 *
 * @param {Object=} $delegate Real $httpBackend instance (allow passing through if specified)
 * @param {Object=} $browser Auto-flushing enabled if specified
 * @return {Object} Instance of $httpBackend mock
 */
function createHttpBackendMock($rootScope, $timeout, $delegate, $browser) {
  var definitions = [],
      expectations = [],
      responses = [],
      responsesPush = angular.bind(responses, responses.push),
      copy = angular.copy;

  function createResponse(status, data, headers, statusText) {
    if (angular.isFunction(status)) return status;

    return function() {
      return angular.isNumber(status)
          ? [status, data, headers, statusText]
          : [200, status, data, headers];
    };
  }

  // TODO(vojta): change params to: method, url, data, headers, callback
  function $httpBackend(method, url, data, callback, headers, timeout, withCredentials) {
    var xhr = new MockXhr(),
        expectation = expectations[0],
        wasExpected = false;

    function prettyPrint(data) {
      return (angular.isString(data) || angular.isFunction(data) || data instanceof RegExp)
          ? data
          : angular.toJson(data);
    }

    function wrapResponse(wrapped) {
      if (!$browser && timeout) {
        timeout.then ? timeout.then(handleTimeout) : $timeout(handleTimeout, timeout);
      }

      return handleResponse;

      function handleResponse() {
        var response = wrapped.response(method, url, data, headers);
        xhr.$$respHeaders = response[2];
        callback(copy(response[0]), copy(response[1]), xhr.getAllResponseHeaders(),
                 copy(response[3] || ''));
      }

      function handleTimeout() {
        for (var i = 0, ii = responses.length; i < ii; i++) {
          if (responses[i] === handleResponse) {
            responses.splice(i, 1);
            callback(-1, undefined, '');
            break;
          }
        }
      }
    }

    if (expectation && expectation.match(method, url)) {
      if (!expectation.matchData(data)) {
        throw new Error('Expected ' + expectation + ' with different data\n' +
            'EXPECTED: ' + prettyPrint(expectation.data) + '\nGOT:      ' + data);
      }

      if (!expectation.matchHeaders(headers)) {
        throw new Error('Expected ' + expectation + ' with different headers\n' +
                        'EXPECTED: ' + prettyPrint(expectation.headers) + '\nGOT:      ' +
                        prettyPrint(headers));
      }

      expectations.shift();

      if (expectation.response) {
        responses.push(wrapResponse(expectation));
        return;
      }
      wasExpected = true;
    }

    var i = -1, definition;
    while ((definition = definitions[++i])) {
      if (definition.match(method, url, data, headers || {})) {
        if (definition.response) {
          // if $browser specified, we do auto flush all requests
          ($browser ? $browser.defer : responsesPush)(wrapResponse(definition));
        } else if (definition.passThrough) {
          $delegate(method, url, data, callback, headers, timeout, withCredentials);
        } else throw new Error('No response defined !');
        return;
      }
    }
    throw wasExpected ?
        new Error('No response defined !') :
        new Error('Unexpected request: ' + method + ' ' + url + '\n' +
                  (expectation ? 'Expected ' + expectation : 'No more request expected'));
  }

  /**
   * @ngdoc method
   * @name $httpBackend#when
   * @description
   * Creates a new backend definition.
   *
   * @param {string} method HTTP method.
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
   *   data string and returns true if the data is as expected.
   * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
   *   object and returns true if the headers match the current definition.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   *
   *  - respond –
   *      `{function([status,] data[, headers, statusText])
   *      | function(function(method, url, data, headers)}`
   *    – The respond method takes a set of static data to be returned or a function that can
   *    return an array containing response status (number), response data (string), response
   *    headers (Object), and the text for the status (string). The respond method returns the
   *    `requestHandler` object for possible overrides.
   */
  $httpBackend.when = function(method, url, data, headers) {
    var definition = new MockHttpExpectation(method, url, data, headers),
        chain = {
          respond: function(status, data, headers, statusText) {
            definition.passThrough = undefined;
            definition.response = createResponse(status, data, headers, statusText);
            return chain;
          }
        };

    if ($browser) {
      chain.passThrough = function() {
        definition.response = undefined;
        definition.passThrough = true;
        return chain;
      };
    }

    definitions.push(definition);
    return chain;
  };

  /**
   * @ngdoc method
   * @name $httpBackend#whenGET
   * @description
   * Creates a new backend definition for GET requests. For more info see `when()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(Object|function(Object))=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenHEAD
   * @description
   * Creates a new backend definition for HEAD requests. For more info see `when()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(Object|function(Object))=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenDELETE
   * @description
   * Creates a new backend definition for DELETE requests. For more info see `when()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(Object|function(Object))=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenPOST
   * @description
   * Creates a new backend definition for POST requests. For more info see `when()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
   *   data string and returns true if the data is as expected.
   * @param {(Object|function(Object))=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenPUT
   * @description
   * Creates a new backend definition for PUT requests.  For more info see `when()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
   *   data string and returns true if the data is as expected.
   * @param {(Object|function(Object))=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenJSONP
   * @description
   * Creates a new backend definition for JSONP requests. For more info see `when()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */
  createShortMethods('when');


  /**
   * @ngdoc method
   * @name $httpBackend#expect
   * @description
   * Creates a new request expectation.
   *
   * @param {string} method HTTP method.
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
   *  receives data string and returns true if the data is as expected, or Object if request body
   *  is in JSON format.
   * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
   *   object and returns true if the headers match the current expectation.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *  request is handled. You can save this object for later use and invoke `respond` again in
   *  order to change how a matched request is handled.
   *
   *  - respond –
   *    `{function([status,] data[, headers, statusText])
   *    | function(function(method, url, data, headers)}`
   *    – The respond method takes a set of static data to be returned or a function that can
   *    return an array containing response status (number), response data (string), response
   *    headers (Object), and the text for the status (string). The respond method returns the
   *    `requestHandler` object for possible overrides.
   */
  $httpBackend.expect = function(method, url, data, headers) {
    var expectation = new MockHttpExpectation(method, url, data, headers),
        chain = {
          respond: function(status, data, headers, statusText) {
            expectation.response = createResponse(status, data, headers, statusText);
            return chain;
          }
        };

    expectations.push(expectation);
    return chain;
  };


  /**
   * @ngdoc method
   * @name $httpBackend#expectGET
   * @description
   * Creates a new request expectation for GET requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {Object=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled. See #expect for more info.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectHEAD
   * @description
   * Creates a new request expectation for HEAD requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {Object=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectDELETE
   * @description
   * Creates a new request expectation for DELETE requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {Object=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectPOST
   * @description
   * Creates a new request expectation for POST requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
   *  receives data string and returns true if the data is as expected, or Object if request body
   *  is in JSON format.
   * @param {Object=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectPUT
   * @description
   * Creates a new request expectation for PUT requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
   *  receives data string and returns true if the data is as expected, or Object if request body
   *  is in JSON format.
   * @param {Object=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectPATCH
   * @description
   * Creates a new request expectation for PATCH requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
   *  receives data string and returns true if the data is as expected, or Object if request body
   *  is in JSON format.
   * @param {Object=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectJSONP
   * @description
   * Creates a new request expectation for JSONP requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives an url
   *   and returns true if the url matches the current definition.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */
  createShortMethods('expect');


  /**
   * @ngdoc method
   * @name $httpBackend#flush
   * @description
   * Flushes all pending requests using the trained responses.
   *
   * @param {number=} count Number of responses to flush (in the order they arrived). If undefined,
   *   all pending requests will be flushed. If there are no pending requests when the flush method
   *   is called an exception is thrown (as this typically a sign of programming error).
   */
  $httpBackend.flush = function(count, digest) {
    if (digest !== false) $rootScope.$digest();
    if (!responses.length) throw new Error('No pending request to flush !');

    if (angular.isDefined(count) && count !== null) {
      while (count--) {
        if (!responses.length) throw new Error('No more pending request to flush !');
        responses.shift()();
      }
    } else {
      while (responses.length) {
        responses.shift()();
      }
    }
    $httpBackend.verifyNoOutstandingExpectation(digest);
  };


  /**
   * @ngdoc method
   * @name $httpBackend#verifyNoOutstandingExpectation
   * @description
   * Verifies that all of the requests defined via the `expect` api were made. If any of the
   * requests were not made, verifyNoOutstandingExpectation throws an exception.
   *
   * Typically, you would call this method following each test case that asserts requests using an
   * "afterEach" clause.
   *
   * ```js
   *   afterEach($httpBackend.verifyNoOutstandingExpectation);
   * ```
   */
  $httpBackend.verifyNoOutstandingExpectation = function(digest) {
    if (digest !== false) $rootScope.$digest();
    if (expectations.length) {
      throw new Error('Unsatisfied requests: ' + expectations.join(', '));
    }
  };


  /**
   * @ngdoc method
   * @name $httpBackend#verifyNoOutstandingRequest
   * @description
   * Verifies that there are no outstanding requests that need to be flushed.
   *
   * Typically, you would call this method following each test case that asserts requests using an
   * "afterEach" clause.
   *
   * ```js
   *   afterEach($httpBackend.verifyNoOutstandingRequest);
   * ```
   */
  $httpBackend.verifyNoOutstandingRequest = function() {
    if (responses.length) {
      throw new Error('Unflushed requests: ' + responses.length);
    }
  };


  /**
   * @ngdoc method
   * @name $httpBackend#resetExpectations
   * @description
   * Resets all request expectations, but preserves all backend definitions. Typically, you would
   * call resetExpectations during a multiple-phase test when you want to reuse the same instance of
   * $httpBackend mock.
   */
  $httpBackend.resetExpectations = function() {
    expectations.length = 0;
    responses.length = 0;
  };

  return $httpBackend;


  function createShortMethods(prefix) {
    angular.forEach(['GET', 'DELETE', 'JSONP', 'HEAD'], function(method) {
     $httpBackend[prefix + method] = function(url, headers) {
       return $httpBackend[prefix](method, url, undefined, headers);
     };
    });

    angular.forEach(['PUT', 'POST', 'PATCH'], function(method) {
      $httpBackend[prefix + method] = function(url, data, headers) {
        return $httpBackend[prefix](method, url, data, headers);
      };
    });
  }
}

function MockHttpExpectation(method, url, data, headers) {

  this.data = data;
  this.headers = headers;

  this.match = function(m, u, d, h) {
    if (method != m) return false;
    if (!this.matchUrl(u)) return false;
    if (angular.isDefined(d) && !this.matchData(d)) return false;
    if (angular.isDefined(h) && !this.matchHeaders(h)) return false;
    return true;
  };

  this.matchUrl = function(u) {
    if (!url) return true;
    if (angular.isFunction(url.test)) return url.test(u);
    if (angular.isFunction(url)) return url(u);
    return url == u;
  };

  this.matchHeaders = function(h) {
    if (angular.isUndefined(headers)) return true;
    if (angular.isFunction(headers)) return headers(h);
    return angular.equals(headers, h);
  };

  this.matchData = function(d) {
    if (angular.isUndefined(data)) return true;
    if (data && angular.isFunction(data.test)) return data.test(d);
    if (data && angular.isFunction(data)) return data(d);
    if (data && !angular.isString(data)) {
      return angular.equals(angular.fromJson(angular.toJson(data)), angular.fromJson(d));
    }
    return data == d;
  };

  this.toString = function() {
    return method + ' ' + url;
  };
}

function createMockXhr() {
  return new MockXhr();
}

function MockXhr() {

  // hack for testing $http, $httpBackend
  MockXhr.$$lastInstance = this;

  this.open = function(method, url, async) {
    this.$$method = method;
    this.$$url = url;
    this.$$async = async;
    this.$$reqHeaders = {};
    this.$$respHeaders = {};
  };

  this.send = function(data) {
    this.$$data = data;
  };

  this.setRequestHeader = function(key, value) {
    this.$$reqHeaders[key] = value;
  };

  this.getResponseHeader = function(name) {
    // the lookup must be case insensitive,
    // that's why we try two quick lookups first and full scan last
    var header = this.$$respHeaders[name];
    if (header) return header;

    name = angular.lowercase(name);
    header = this.$$respHeaders[name];
    if (header) return header;

    header = undefined;
    angular.forEach(this.$$respHeaders, function(headerVal, headerName) {
      if (!header && angular.lowercase(headerName) == name) header = headerVal;
    });
    return header;
  };

  this.getAllResponseHeaders = function() {
    var lines = [];

    angular.forEach(this.$$respHeaders, function(value, key) {
      lines.push(key + ': ' + value);
    });
    return lines.join('\n');
  };

  this.abort = angular.noop;
}


/**
 * @ngdoc service
 * @name $timeout
 * @description
 *
 * This service is just a simple decorator for {@link ng.$timeout $timeout} service
 * that adds a "flush" and "verifyNoPendingTasks" methods.
 */

angular.mock.$TimeoutDecorator = ['$delegate', '$browser', function($delegate, $browser) {

  /**
   * @ngdoc method
   * @name $timeout#flush
   * @description
   *
   * Flushes the queue of pending tasks.
   *
   * @param {number=} delay maximum timeout amount to flush up until
   */
  $delegate.flush = function(delay) {
    $browser.defer.flush(delay);
  };

  /**
   * @ngdoc method
   * @name $timeout#verifyNoPendingTasks
   * @description
   *
   * Verifies that there are no pending tasks that need to be flushed.
   */
  $delegate.verifyNoPendingTasks = function() {
    if ($browser.deferredFns.length) {
      throw new Error('Deferred tasks to flush (' + $browser.deferredFns.length + '): ' +
          formatPendingTasksAsString($browser.deferredFns));
    }
  };

  function formatPendingTasksAsString(tasks) {
    var result = [];
    angular.forEach(tasks, function(task) {
      result.push('{id: ' + task.id + ', ' + 'time: ' + task.time + '}');
    });

    return result.join(', ');
  }

  return $delegate;
}];

angular.mock.$RAFDecorator = ['$delegate', function($delegate) {
  var rafFn = function(fn) {
    var index = rafFn.queue.length;
    rafFn.queue.push(fn);
    return function() {
      rafFn.queue.splice(index, 1);
    };
  };

  rafFn.queue = [];
  rafFn.supported = $delegate.supported;

  rafFn.flush = function() {
    if (rafFn.queue.length === 0) {
      throw new Error('No rAF callbacks present');
    }

    var length = rafFn.queue.length;
    for (var i = 0; i < length; i++) {
      rafFn.queue[i]();
    }

    rafFn.queue = rafFn.queue.slice(i);
  };

  return rafFn;
}];

/**
 *
 */
angular.mock.$RootElementProvider = function() {
  this.$get = function() {
    return angular.element('<div ng-app></div>');
  };
};

/**
 * @ngdoc service
 * @name $controller
 * @description
 * A decorator for {@link ng.$controller} with additional `bindings` parameter, useful when testing
 * controllers of directives that use {@link $compile#-bindtocontroller- `bindToController`}.
 *
 *
 * ## Example
 *
 * ```js
 *
 * // Directive definition ...
 *
 * myMod.directive('myDirective', {
 *   controller: 'MyDirectiveController',
 *   bindToController: {
 *     name: '@'
 *   }
 * });
 *
 *
 * // Controller definition ...
 *
 * myMod.controller('MyDirectiveController', ['log', function($log) {
 *   $log.info(this.name);
 * })];
 *
 *
 * // In a test ...
 *
 * describe('myDirectiveController', function() {
 *   it('should write the bound name to the log', inject(function($controller, $log) {
 *     var ctrl = $controller('MyDirectiveController', { /* no locals &#42;/ }, { name: 'Clark Kent' });
 *     expect(ctrl.name).toEqual('Clark Kent');
 *     expect($log.info.logs).toEqual(['Clark Kent']);
 *   });
 * });
 *
 * ```
 *
 * @param {Function|string} constructor If called with a function then it's considered to be the
 *    controller constructor function. Otherwise it's considered to be a string which is used
 *    to retrieve the controller constructor using the following steps:
 *
 *    * check if a controller with given name is registered via `$controllerProvider`
 *    * check if evaluating the string on the current scope returns a constructor
 *    * if $controllerProvider#allowGlobals, check `window[constructor]` on the global
 *      `window` object (not recommended)
 *
 *    The string can use the `controller as property` syntax, where the controller instance is published
 *    as the specified property on the `scope`; the `scope` must be injected into `locals` param for this
 *    to work correctly.
 *
 * @param {Object} locals Injection locals for Controller.
 * @param {Object=} bindings Properties to add to the controller before invoking the constructor. This is used
 *                           to simulate the `bindToController` feature and simplify certain kinds of tests.
 * @return {Object} Instance of given controller.
 */
angular.mock.$ControllerDecorator = ['$delegate', function($delegate) {
  return function(expression, locals, later, ident) {
    if (later && typeof later === 'object') {
      var create = $delegate(expression, locals, true, ident);
      angular.extend(create.instance, later);
      return create();
    }
    return $delegate(expression, locals, later, ident);
  };
}];


/**
 * @ngdoc module
 * @name ngMock
 * @packageName angular-mocks
 * @description
 *
 * # ngMock
 *
 * The `ngMock` module provides support to inject and mock Angular services into unit tests.
 * In addition, ngMock also extends various core ng services such that they can be
 * inspected and controlled in a synchronous manner within test code.
 *
 *
 * <div doc-module-components="ngMock"></div>
 *
 */
angular.module('ngMock', ['ng']).provider({
  $browser: angular.mock.$BrowserProvider,
  $exceptionHandler: angular.mock.$ExceptionHandlerProvider,
  $log: angular.mock.$LogProvider,
  $interval: angular.mock.$IntervalProvider,
  $httpBackend: angular.mock.$HttpBackendProvider,
  $rootElement: angular.mock.$RootElementProvider
}).config(['$provide', function($provide) {
  $provide.decorator('$timeout', angular.mock.$TimeoutDecorator);
  $provide.decorator('$$rAF', angular.mock.$RAFDecorator);
  $provide.decorator('$rootScope', angular.mock.$RootScopeDecorator);
  $provide.decorator('$controller', angular.mock.$ControllerDecorator);
}]);

/**
 * @ngdoc module
 * @name ngMockE2E
 * @module ngMockE2E
 * @packageName angular-mocks
 * @description
 *
 * The `ngMockE2E` is an angular module which contains mocks suitable for end-to-end testing.
 * Currently there is only one mock present in this module -
 * the {@link ngMockE2E.$httpBackend e2e $httpBackend} mock.
 */
angular.module('ngMockE2E', ['ng']).config(['$provide', function($provide) {
  $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
}]);

/**
 * @ngdoc service
 * @name $httpBackend
 * @module ngMockE2E
 * @description
 * Fake HTTP backend implementation suitable for end-to-end testing or backend-less development of
 * applications that use the {@link ng.$http $http service}.
 *
 * *Note*: For fake http backend implementation suitable for unit testing please see
 * {@link ngMock.$httpBackend unit-testing $httpBackend mock}.
 *
 * This implementation can be used to respond with static or dynamic responses via the `when` api
 * and its shortcuts (`whenGET`, `whenPOST`, etc) and optionally pass through requests to the
 * real $httpBackend for specific requests (e.g. to interact with certain remote apis or to fetch
 * templates from a webserver).
 *
 * As opposed to unit-testing, in an end-to-end testing scenario or in scenario when an application
 * is being developed with the real backend api replaced with a mock, it is often desirable for
 * certain category of requests to bypass the mock and issue a real http request (e.g. to fetch
 * templates or static files from the webserver). To configure the backend with this behavior
 * use the `passThrough` request handler of `when` instead of `respond`.
 *
 * Additionally, we don't want to manually have to flush mocked out requests like we do during unit
 * testing. For this reason the e2e $httpBackend flushes mocked out requests
 * automatically, closely simulating the behavior of the XMLHttpRequest object.
 *
 * To setup the application to run with this http backend, you have to create a module that depends
 * on the `ngMockE2E` and your application modules and defines the fake backend:
 *
 * ```js
 *   myAppDev = angular.module('myAppDev', ['myApp', 'ngMockE2E']);
 *   myAppDev.run(function($httpBackend) {
 *     phones = [{name: 'phone1'}, {name: 'phone2'}];
 *
 *     // returns the current list of phones
 *     $httpBackend.whenGET('/phones').respond(phones);
 *
 *     // adds a new phone to the phones array
 *     $httpBackend.whenPOST('/phones').respond(function(method, url, data) {
 *       var phone = angular.fromJson(data);
 *       phones.push(phone);
 *       return [200, phone, {}];
 *     });
 *     $httpBackend.whenGET(/^\/templates\//).passThrough();
 *     //...
 *   });
 * ```
 *
 * Afterwards, bootstrap your app with this new module.
 */

/**
 * @ngdoc method
 * @name $httpBackend#when
 * @module ngMockE2E
 * @description
 * Creates a new backend definition.
 *
 * @param {string} method HTTP method.
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(string|RegExp)=} data HTTP request body.
 * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
 *   object and returns true if the headers match the current definition.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 *
 *  - respond –
 *    `{function([status,] data[, headers, statusText])
 *    | function(function(method, url, data, headers)}`
 *    – The respond method takes a set of static data to be returned or a function that can return
 *    an array containing response status (number), response data (string), response headers
 *    (Object), and the text for the status (string).
 *  - passThrough – `{function()}` – Any request matching a backend definition with
 *    `passThrough` handler will be passed through to the real backend (an XHR request will be made
 *    to the server.)
 *  - Both methods return the `requestHandler` object for possible overrides.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenGET
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for GET requests. For more info see `when()`.
 *
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenHEAD
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for HEAD requests. For more info see `when()`.
 *
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenDELETE
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for DELETE requests. For more info see `when()`.
 *
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenPOST
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for POST requests. For more info see `when()`.
 *
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(string|RegExp)=} data HTTP request body.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenPUT
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for PUT requests.  For more info see `when()`.
 *
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(string|RegExp)=} data HTTP request body.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenPATCH
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for PATCH requests.  For more info see `when()`.
 *
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(string|RegExp)=} data HTTP request body.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenJSONP
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for JSONP requests. For more info see `when()`.
 *
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */
angular.mock.e2e = {};
angular.mock.e2e.$httpBackendDecorator =
  ['$rootScope', '$timeout', '$delegate', '$browser', createHttpBackendMock];


/**
 * @ngdoc type
 * @name $rootScope.Scope
 * @module ngMock
 * @description
 * {@link ng.$rootScope.Scope Scope} type decorated with helper methods useful for testing. These
 * methods are automatically available on any {@link ng.$rootScope.Scope Scope} instance when
 * `ngMock` module is loaded.
 *
 * In addition to all the regular `Scope` methods, the following helper methods are available:
 */
angular.mock.$RootScopeDecorator = ['$delegate', function($delegate) {

  var $rootScopePrototype = Object.getPrototypeOf($delegate);

  $rootScopePrototype.$countChildScopes = countChildScopes;
  $rootScopePrototype.$countWatchers = countWatchers;

  return $delegate;

  // ------------------------------------------------------------------------------------------ //

  /**
   * @ngdoc method
   * @name $rootScope.Scope#$countChildScopes
   * @module ngMock
   * @description
   * Counts all the direct and indirect child scopes of the current scope.
   *
   * The current scope is excluded from the count. The count includes all isolate child scopes.
   *
   * @returns {number} Total number of child scopes.
   */
  function countChildScopes() {
    // jshint validthis: true
    var count = 0; // exclude the current scope
    var pendingChildHeads = [this.$$childHead];
    var currentScope;

    while (pendingChildHeads.length) {
      currentScope = pendingChildHeads.shift();

      while (currentScope) {
        count += 1;
        pendingChildHeads.push(currentScope.$$childHead);
        currentScope = currentScope.$$nextSibling;
      }
    }

    return count;
  }


  /**
   * @ngdoc method
   * @name $rootScope.Scope#$countWatchers
   * @module ngMock
   * @description
   * Counts all the watchers of direct and indirect child scopes of the current scope.
   *
   * The watchers of the current scope are included in the count and so are all the watchers of
   * isolate child scopes.
   *
   * @returns {number} Total number of watchers.
   */
  function countWatchers() {
    // jshint validthis: true
    var count = this.$$watchers ? this.$$watchers.length : 0; // include the current scope
    var pendingChildHeads = [this.$$childHead];
    var currentScope;

    while (pendingChildHeads.length) {
      currentScope = pendingChildHeads.shift();

      while (currentScope) {
        count += currentScope.$$watchers ? currentScope.$$watchers.length : 0;
        pendingChildHeads.push(currentScope.$$childHead);
        currentScope = currentScope.$$nextSibling;
      }
    }

    return count;
  }
}];


if (window.jasmine || window.mocha) {

  var currentSpec = null,
      annotatedFunctions = [],
      isSpecRunning = function() {
        return !!currentSpec;
      };

  angular.mock.$$annotate = angular.injector.$$annotate;
  angular.injector.$$annotate = function(fn) {
    if (typeof fn === 'function' && !fn.$inject) {
      annotatedFunctions.push(fn);
    }
    return angular.mock.$$annotate.apply(this, arguments);
  };


  (window.beforeEach || window.setup)(function() {
    annotatedFunctions = [];
    currentSpec = this;
  });

  (window.afterEach || window.teardown)(function() {
    var injector = currentSpec.$injector;

    annotatedFunctions.forEach(function(fn) {
      delete fn.$inject;
    });

    angular.forEach(currentSpec.$modules, function(module) {
      if (module && module.$$hashKey) {
        module.$$hashKey = undefined;
      }
    });

    currentSpec.$injector = null;
    currentSpec.$modules = null;
    currentSpec = null;

    if (injector) {
      injector.get('$rootElement').off();
    }

    // clean up jquery's fragment cache
    angular.forEach(angular.element.fragments, function(val, key) {
      delete angular.element.fragments[key];
    });

    MockXhr.$$lastInstance = null;

    angular.forEach(angular.callbacks, function(val, key) {
      delete angular.callbacks[key];
    });
    angular.callbacks.counter = 0;
  });

  /**
   * @ngdoc function
   * @name angular.mock.module
   * @description
   *
   * *NOTE*: This function is also published on window for easy access.<br>
   * *NOTE*: This function is declared ONLY WHEN running tests with jasmine or mocha
   *
   * This function registers a module configuration code. It collects the configuration information
   * which will be used when the injector is created by {@link angular.mock.inject inject}.
   *
   * See {@link angular.mock.inject inject} for usage example
   *
   * @param {...(string|Function|Object)} fns any number of modules which are represented as string
   *        aliases or as anonymous module initialization functions. The modules are used to
   *        configure the injector. The 'ng' and 'ngMock' modules are automatically loaded. If an
   *        object literal is passed they will be registered as values in the module, the key being
   *        the module name and the value being what is returned.
   */
  window.module = angular.mock.module = function() {
    var moduleFns = Array.prototype.slice.call(arguments, 0);
    return isSpecRunning() ? workFn() : workFn;
    /////////////////////
    function workFn() {
      if (currentSpec.$injector) {
        throw new Error('Injector already created, can not register a module!');
      } else {
        var modules = currentSpec.$modules || (currentSpec.$modules = []);
        angular.forEach(moduleFns, function(module) {
          if (angular.isObject(module) && !angular.isArray(module)) {
            modules.push(function($provide) {
              angular.forEach(module, function(value, key) {
                $provide.value(key, value);
              });
            });
          } else {
            modules.push(module);
          }
        });
      }
    }
  };

  /**
   * @ngdoc function
   * @name angular.mock.inject
   * @description
   *
   * *NOTE*: This function is also published on window for easy access.<br>
   * *NOTE*: This function is declared ONLY WHEN running tests with jasmine or mocha
   *
   * The inject function wraps a function into an injectable function. The inject() creates new
   * instance of {@link auto.$injector $injector} per test, which is then used for
   * resolving references.
   *
   *
   * ## Resolving References (Underscore Wrapping)
   * Often, we would like to inject a reference once, in a `beforeEach()` block and reuse this
   * in multiple `it()` clauses. To be able to do this we must assign the reference to a variable
   * that is declared in the scope of the `describe()` block. Since we would, most likely, want
   * the variable to have the same name of the reference we have a problem, since the parameter
   * to the `inject()` function would hide the outer variable.
   *
   * To help with this, the injected parameters can, optionally, be enclosed with underscores.
   * These are ignored by the injector when the reference name is resolved.
   *
   * For example, the parameter `_myService_` would be resolved as the reference `myService`.
   * Since it is available in the function body as _myService_, we can then assign it to a variable
   * defined in an outer scope.
   *
   * ```
   * // Defined out reference variable outside
   * var myService;
   *
   * // Wrap the parameter in underscores
   * beforeEach( inject( function(_myService_){
   *   myService = _myService_;
   * }));
   *
   * // Use myService in a series of tests.
   * it('makes use of myService', function() {
   *   myService.doStuff();
   * });
   *
   * ```
   *
   * See also {@link angular.mock.module angular.mock.module}
   *
   * ## Example
   * Example of what a typical jasmine tests looks like with the inject method.
   * ```js
   *
   *   angular.module('myApplicationModule', [])
   *       .value('mode', 'app')
   *       .value('version', 'v1.0.1');
   *
   *
   *   describe('MyApp', function() {
   *
   *     // You need to load modules that you want to test,
   *     // it loads only the "ng" module by default.
   *     beforeEach(module('myApplicationModule'));
   *
   *
   *     // inject() is used to inject arguments of all given functions
   *     it('should provide a version', inject(function(mode, version) {
   *       expect(version).toEqual('v1.0.1');
   *       expect(mode).toEqual('app');
   *     }));
   *
   *
   *     // The inject and module method can also be used inside of the it or beforeEach
   *     it('should override a version and test the new version is injected', function() {
   *       // module() takes functions or strings (module aliases)
   *       module(function($provide) {
   *         $provide.value('version', 'overridden'); // override version here
   *       });
   *
   *       inject(function(version) {
   *         expect(version).toEqual('overridden');
   *       });
   *     });
   *   });
   *
   * ```
   *
   * @param {...Function} fns any number of functions which will be injected using the injector.
   */



  var ErrorAddingDeclarationLocationStack = function(e, errorForStack) {
    this.message = e.message;
    this.name = e.name;
    if (e.line) this.line = e.line;
    if (e.sourceId) this.sourceId = e.sourceId;
    if (e.stack && errorForStack)
      this.stack = e.stack + '\n' + errorForStack.stack;
    if (e.stackArray) this.stackArray = e.stackArray;
  };
  ErrorAddingDeclarationLocationStack.prototype.toString = Error.prototype.toString;

  window.inject = angular.mock.inject = function() {
    var blockFns = Array.prototype.slice.call(arguments, 0);
    var errorForStack = new Error('Declaration Location');
    return isSpecRunning() ? workFn.call(currentSpec) : workFn;
    /////////////////////
    function workFn() {
      var modules = currentSpec.$modules || [];
      var strictDi = !!currentSpec.$injectorStrict;
      modules.unshift('ngMock');
      modules.unshift('ng');
      var injector = currentSpec.$injector;
      if (!injector) {
        if (strictDi) {
          // If strictDi is enabled, annotate the providerInjector blocks
          angular.forEach(modules, function(moduleFn) {
            if (typeof moduleFn === "function") {
              angular.injector.$$annotate(moduleFn);
            }
          });
        }
        injector = currentSpec.$injector = angular.injector(modules, strictDi);
        currentSpec.$injectorStrict = strictDi;
      }
      for (var i = 0, ii = blockFns.length; i < ii; i++) {
        if (currentSpec.$injectorStrict) {
          // If the injector is strict / strictDi, and the spec wants to inject using automatic
          // annotation, then annotate the function here.
          injector.annotate(blockFns[i]);
        }
        try {
          /* jshint -W040 *//* Jasmine explicitly provides a `this` object when calling functions */
          injector.invoke(blockFns[i] || angular.noop, this);
          /* jshint +W040 */
        } catch (e) {
          if (e.stack && errorForStack) {
            throw new ErrorAddingDeclarationLocationStack(e, errorForStack);
          }
          throw e;
        } finally {
          errorForStack = null;
        }
      }
    }
  };


  angular.mock.inject.strictDi = function(value) {
    value = arguments.length ? !!value : true;
    return isSpecRunning() ? workFn() : workFn;

    function workFn() {
      if (value !== currentSpec.$injectorStrict) {
        if (currentSpec.$injector) {
          throw new Error('Injector already created, can not modify strict annotations');
        } else {
          currentSpec.$injectorStrict = value;
        }
      }
    }
  };
}


})(window, window.angular);

!function(){app=angular.module("mattiashaApp",["ngRoute","ngResource","ui.bootstrap","experienceDateFilter"]),app.config(["$routeProvider",function(e){e.when("/",{controller:"ExperiencesController",templateUrl:"app/views/experiences.html"}).when("/experiences",{controller:"ExperiencesController",templateUrl:"app/views/experiences.html"}).when("/about",{templateUrl:"app/views/about.html"}).when("/contact",{templateUrl:"app/views/contact.html"}).otherwise({redirectTo:"/"})}])}();
!function(){var e=function(e,a){function s(a){e.commercials=[],e.courses=[],e.projects=[],e.awards=[],e.educations=[],e.haveCommercials=!1,e.haveCourses=!1,e.haveProjects=!1,e.haveAwards=!1,e.haveEducations=!1,angular.forEach(a,function(a,s){for(var r in a.types)switch(a.types[r]){case"Award":e.awards.push(a),e.haveAwards=!0;break;case"Commercial":e.commercials.push(a),e.haveCommercials=!0;break;case"Course":e.courses.push(a),e.haveCourses=!0;break;case"Education":e.educations.push(a),e.haveEducations=!0;break;case"Project":e.projects.push(a),e.haveProjects=!0}})}a.query().$promise.then(function(a){s(a),e.afterExperiencesStored=!0})};e.$inject=["$scope","experiencesFactory"],angular.module("mattiashaApp").controller("ExperiencesController",e)}();
!function(){var a=function(a){return a("http://www.local.gam.com/mattiasha_back/restapi/experiences",{},{query:{method:"GET",isArray:!1}})};a.$inject=["$resource"],angular.module("mattiashaApp").factory("experiencesFactory",a)}();
/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.14.0 - 2015-10-08
 * License: MIT
 */
angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdown","ui.bootstrap.stackedMap","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.tpls",["template/accordion/accordion-group.html","template/accordion/accordion.html","template/alert/alert.html","template/carousel/carousel.html","template/carousel/slide.html","template/datepicker/datepicker.html","template/datepicker/day.html","template/datepicker/month.html","template/datepicker/popup.html","template/datepicker/year.html","template/modal/backdrop.html","template/modal/window.html","template/pagination/pager.html","template/pagination/pagination.html","template/tooltip/tooltip-html-popup.html","template/tooltip/tooltip-popup.html","template/tooltip/tooltip-template-popup.html","template/popover/popover-html.html","template/popover/popover-template.html","template/popover/popover.html","template/progressbar/bar.html","template/progressbar/progress.html","template/progressbar/progressbar.html","template/rating/rating.html","template/tabs/tab.html","template/tabs/tabset.html","template/timepicker/timepicker.html","template/typeahead/typeahead-match.html","template/typeahead/typeahead-popup.html"]),angular.module("ui.bootstrap.collapse",[]).directive("uibCollapse",["$animate","$injector",function(a,b){var c=b.has("$animateCss")?b.get("$animateCss"):null;return{link:function(b,d,e){function f(){d.removeClass("collapse").addClass("collapsing").attr("aria-expanded",!0).attr("aria-hidden",!1),c?c(d,{addClass:"in",easing:"ease",to:{height:d[0].scrollHeight+"px"}}).start().done(g):a.addClass(d,"in",{to:{height:d[0].scrollHeight+"px"}}).then(g)}function g(){d.removeClass("collapsing").addClass("collapse").css({height:"auto"})}function h(){return d.hasClass("collapse")||d.hasClass("in")?(d.css({height:d[0].scrollHeight+"px"}).removeClass("collapse").addClass("collapsing").attr("aria-expanded",!1).attr("aria-hidden",!0),void(c?c(d,{removeClass:"in",to:{height:"0"}}).start().done(i):a.removeClass(d,"in",{to:{height:"0"}}).then(i))):i()}function i(){d.css({height:"0"}),d.removeClass("collapsing").addClass("collapse")}b.$watch(e.uibCollapse,function(a){a?h():f()})}}}]),angular.module("ui.bootstrap.collapse").value("$collapseSuppressWarning",!1).directive("collapse",["$animate","$injector","$log","$collapseSuppressWarning",function(a,b,c,d){var e=b.has("$animateCss")?b.get("$animateCss"):null;return{link:function(b,f,g){function h(){f.removeClass("collapse").addClass("collapsing").attr("aria-expanded",!0).attr("aria-hidden",!1),e?e(f,{addClass:"in",easing:"ease",to:{height:f[0].scrollHeight+"px"}}).start().done(i):a.addClass(f,"in",{to:{height:f[0].scrollHeight+"px"}}).then(i)}function i(){f.removeClass("collapsing").addClass("collapse").css({height:"auto"})}function j(){return f.hasClass("collapse")||f.hasClass("in")?(f.css({height:f[0].scrollHeight+"px"}).removeClass("collapse").addClass("collapsing").attr("aria-expanded",!1).attr("aria-hidden",!0),void(e?e(f,{removeClass:"in",to:{height:"0"}}).start().done(k):a.removeClass(f,"in",{to:{height:"0"}}).then(k))):k()}function k(){f.css({height:"0"}),f.removeClass("collapsing").addClass("collapse")}d||c.warn("collapse is now deprecated. Use uib-collapse instead."),b.$watch(g.collapse,function(a){a?j():h()})}}}]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse"]).constant("uibAccordionConfig",{closeOthers:!0}).controller("UibAccordionController",["$scope","$attrs","uibAccordionConfig",function(a,b,c){this.groups=[],this.closeOthers=function(d){var e=angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on("$destroy",function(c){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(b,1)}}]).directive("uibAccordion",function(){return{controller:"UibAccordionController",controllerAs:"accordion",transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/accordion/accordion.html"}}}).directive("uibAccordionGroup",function(){return{require:"^uibAccordion",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/accordion/accordion-group.html"},scope:{heading:"@",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(a,b,c,d){d.addGroup(a),a.openClass=c.openClass||"panel-open",a.panelClass=c.panelClass,a.$watch("isOpen",function(c){b.toggleClass(a.openClass,!!c),c&&d.closeOthers(a)}),a.toggleOpen=function(b){a.isDisabled||b&&32!==b.which||(a.isOpen=!a.isOpen)}}}}).directive("uibAccordionHeading",function(){return{transclude:!0,template:"",replace:!0,require:"^uibAccordionGroup",link:function(a,b,c,d,e){d.setHeading(e(a,angular.noop))}}}).directive("uibAccordionTransclude",function(){return{require:["?^uibAccordionGroup","?^accordionGroup"],link:function(a,b,c,d){d=d[0]?d[0]:d[1],a.$watch(function(){return d[c.uibAccordionTransclude]},function(a){a&&(b.find("span").html(""),b.find("span").append(a))})}}}),angular.module("ui.bootstrap.accordion").value("$accordionSuppressWarning",!1).controller("AccordionController",["$scope","$attrs","$controller","$log","$accordionSuppressWarning",function(a,b,c,d,e){return e||d.warn("AccordionController is now deprecated. Use UibAccordionController instead."),c("UibAccordionController",{$scope:a,$attrs:b})}]).directive("accordion",["$log","$accordionSuppressWarning",function(a,b){return{restrict:"EA",controller:"AccordionController",controllerAs:"accordion",transclude:!0,replace:!1,templateUrl:function(a,b){return b.templateUrl||"template/accordion/accordion.html"},link:function(){b||a.warn("accordion is now deprecated. Use uib-accordion instead.")}}}]).directive("accordionGroup",["$log","$accordionSuppressWarning",function(a,b){return{require:"^accordion",restrict:"EA",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/accordion/accordion-group.html"},scope:{heading:"@",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(c,d,e,f){b||a.warn("accordion-group is now deprecated. Use uib-accordion-group instead."),f.addGroup(c),c.openClass=e.openClass||"panel-open",c.panelClass=e.panelClass,c.$watch("isOpen",function(a){d.toggleClass(c.openClass,!!a),a&&f.closeOthers(c)}),c.toggleOpen=function(a){c.isDisabled||a&&32!==a.which||(c.isOpen=!c.isOpen)}}}}]).directive("accordionHeading",["$log","$accordionSuppressWarning",function(a,b){return{restrict:"EA",transclude:!0,template:"",replace:!0,require:"^accordionGroup",link:function(c,d,e,f,g){b||a.warn("accordion-heading is now deprecated. Use uib-accordion-heading instead."),f.setHeading(g(c,angular.noop))}}}]).directive("accordionTransclude",["$log","$accordionSuppressWarning",function(a,b){return{require:"^accordionGroup",link:function(c,d,e,f){b||a.warn("accordion-transclude is now deprecated. Use uib-accordion-transclude instead."),c.$watch(function(){return f[e.accordionTransclude]},function(a){a&&(d.find("span").html(""),d.find("span").append(a))})}}}]),angular.module("ui.bootstrap.alert",[]).controller("UibAlertController",["$scope","$attrs","$timeout",function(a,b,c){a.closeable=!!b.close,angular.isDefined(b.dismissOnTimeout)&&c(function(){a.close()},parseInt(b.dismissOnTimeout,10))}]).directive("uibAlert",function(){return{controller:"UibAlertController",controllerAs:"alert",templateUrl:function(a,b){return b.templateUrl||"template/alert/alert.html"},transclude:!0,replace:!0,scope:{type:"@",close:"&"}}}),angular.module("ui.bootstrap.alert").value("$alertSuppressWarning",!1).controller("AlertController",["$scope","$attrs","$controller","$log","$alertSuppressWarning",function(a,b,c,d,e){return e||d.warn("AlertController is now deprecated. Use UibAlertController instead."),c("UibAlertController",{$scope:a,$attrs:b})}]).directive("alert",["$log","$alertSuppressWarning",function(a,b){return{controller:"AlertController",controllerAs:"alert",templateUrl:function(a,b){return b.templateUrl||"template/alert/alert.html"},transclude:!0,replace:!0,scope:{type:"@",close:"&"},link:function(){b||a.warn("alert is now deprecated. Use uib-alert instead.")}}}]),angular.module("ui.bootstrap.buttons",[]).constant("uibButtonConfig",{activeClass:"active",toggleEvent:"click"}).controller("UibButtonsController",["uibButtonConfig",function(a){this.activeClass=a.activeClass||"active",this.toggleEvent=a.toggleEvent||"click"}]).directive("uibBtnRadio",function(){return{require:["uibBtnRadio","ngModel"],controller:"UibButtonsController",controllerAs:"buttons",link:function(a,b,c,d){var e=d[0],f=d[1];b.find("input").css({display:"none"}),f.$render=function(){b.toggleClass(e.activeClass,angular.equals(f.$modelValue,a.$eval(c.uibBtnRadio)))},b.on(e.toggleEvent,function(){if(!c.disabled){var d=b.hasClass(e.activeClass);(!d||angular.isDefined(c.uncheckable))&&a.$apply(function(){f.$setViewValue(d?null:a.$eval(c.uibBtnRadio)),f.$render()})}})}}}).directive("uibBtnCheckbox",["$document",function(a){return{require:["uibBtnCheckbox","ngModel"],controller:"UibButtonsController",controllerAs:"button",link:function(b,c,d,e){function f(){return h(d.btnCheckboxTrue,!0)}function g(){return h(d.btnCheckboxFalse,!1)}function h(a,c){return angular.isDefined(a)?b.$eval(a):c}var i=e[0],j=e[1];c.find("input").css({display:"none"}),j.$render=function(){c.toggleClass(i.activeClass,angular.equals(j.$modelValue,f()))},c.on(i.toggleEvent,function(){d.disabled||b.$apply(function(){j.$setViewValue(c.hasClass(i.activeClass)?g():f()),j.$render()})}),c.on("keypress",function(e){d.disabled||32!==e.which||a[0].activeElement!==c[0]||b.$apply(function(){j.$setViewValue(c.hasClass(i.activeClass)?g():f()),j.$render()})})}}}]),angular.module("ui.bootstrap.buttons").value("$buttonsSuppressWarning",!1).controller("ButtonsController",["$controller","$log","$buttonsSuppressWarning",function(a,b,c){return c||b.warn("ButtonsController is now deprecated. Use UibButtonsController instead."),a("UibButtonsController")}]).directive("btnRadio",["$log","$buttonsSuppressWarning",function(a,b){return{require:["btnRadio","ngModel"],controller:"ButtonsController",controllerAs:"buttons",link:function(c,d,e,f){b||a.warn("btn-radio is now deprecated. Use uib-btn-radio instead.");var g=f[0],h=f[1];d.find("input").css({display:"none"}),h.$render=function(){d.toggleClass(g.activeClass,angular.equals(h.$modelValue,c.$eval(e.btnRadio)))},d.bind(g.toggleEvent,function(){if(!e.disabled){var a=d.hasClass(g.activeClass);(!a||angular.isDefined(e.uncheckable))&&c.$apply(function(){h.$setViewValue(a?null:c.$eval(e.btnRadio)),h.$render()})}})}}}]).directive("btnCheckbox",["$document","$log","$buttonsSuppressWarning",function(a,b,c){return{require:["btnCheckbox","ngModel"],controller:"ButtonsController",controllerAs:"button",link:function(d,e,f,g){function h(){return j(f.btnCheckboxTrue,!0)}function i(){return j(f.btnCheckboxFalse,!1)}function j(a,b){var c=d.$eval(a);return angular.isDefined(c)?c:b}c||b.warn("btn-checkbox is now deprecated. Use uib-btn-checkbox instead.");var k=g[0],l=g[1];e.find("input").css({display:"none"}),l.$render=function(){e.toggleClass(k.activeClass,angular.equals(l.$modelValue,h()))},e.bind(k.toggleEvent,function(){f.disabled||d.$apply(function(){l.$setViewValue(e.hasClass(k.activeClass)?i():h()),l.$render()})}),e.on("keypress",function(b){f.disabled||32!==b.which||a[0].activeElement!==e[0]||d.$apply(function(){l.$setViewValue(e.hasClass(k.activeClass)?i():h()),l.$render()})})}}}]),angular.module("ui.bootstrap.carousel",[]).controller("UibCarouselController",["$scope","$element","$interval","$animate",function(a,b,c,d){function e(b,c,e){s||(angular.extend(b,{direction:e,active:!0}),angular.extend(m.currentSlide||{},{direction:e,active:!1}),d.enabled()&&!a.noTransition&&!a.$currentTransition&&b.$element&&m.slides.length>1&&(b.$element.data(q,b.direction),m.currentSlide&&m.currentSlide.$element&&m.currentSlide.$element.data(q,b.direction),a.$currentTransition=!0,o?d.on("addClass",b.$element,function(b,c){"close"===c&&(a.$currentTransition=null,d.off("addClass",b))}):b.$element.one("$animate:close",function(){a.$currentTransition=null})),m.currentSlide=b,r=c,g())}function f(a){if(angular.isUndefined(n[a].index))return n[a];var b;n.length;for(b=0;b<n.length;++b)if(n[b].index==a)return n[b]}function g(){h();var b=+a.interval;!isNaN(b)&&b>0&&(k=c(i,b))}function h(){k&&(c.cancel(k),k=null)}function i(){var b=+a.interval;l&&!isNaN(b)&&b>0&&n.length?a.next():a.pause()}function j(b){b.length||(a.$currentTransition=null)}var k,l,m=this,n=m.slides=a.slides=[],o=angular.version.minor>=4,p="uib-noTransition",q="uib-slideDirection",r=-1;m.currentSlide=null;var s=!1;m.select=a.select=function(b,c){var d=a.indexOfSlide(b);void 0===c&&(c=d>m.getCurrentIndex()?"next":"prev"),b&&b!==m.currentSlide&&!a.$currentTransition&&e(b,d,c)},a.$on("$destroy",function(){s=!0}),m.getCurrentIndex=function(){return m.currentSlide&&angular.isDefined(m.currentSlide.index)?+m.currentSlide.index:r},a.indexOfSlide=function(a){return angular.isDefined(a.index)?+a.index:n.indexOf(a)},a.next=function(){var b=(m.getCurrentIndex()+1)%n.length;return 0===b&&a.noWrap()?void a.pause():m.select(f(b),"next")},a.prev=function(){var b=m.getCurrentIndex()-1<0?n.length-1:m.getCurrentIndex()-1;return a.noWrap()&&b===n.length-1?void a.pause():m.select(f(b),"prev")},a.isActive=function(a){return m.currentSlide===a},a.$watch("interval",g),a.$watchCollection("slides",j),a.$on("$destroy",h),a.play=function(){l||(l=!0,g())},a.pause=function(){a.noPause||(l=!1,h())},m.addSlide=function(b,c){b.$element=c,n.push(b),1===n.length||b.active?(m.select(n[n.length-1]),1===n.length&&a.play()):b.active=!1},m.removeSlide=function(a){angular.isDefined(a.index)&&n.sort(function(a,b){return+a.index>+b.index});var b=n.indexOf(a);n.splice(b,1),n.length>0&&a.active?b>=n.length?m.select(n[b-1]):m.select(n[b]):r>b&&r--,0===n.length&&(m.currentSlide=null)},a.$watch("noTransition",function(a){b.data(p,a)})}]).directive("uibCarousel",[function(){return{transclude:!0,replace:!0,controller:"UibCarouselController",controllerAs:"carousel",require:"carousel",templateUrl:function(a,b){return b.templateUrl||"template/carousel/carousel.html"},scope:{interval:"=",noTransition:"=",noPause:"=",noWrap:"&"}}}]).directive("uibSlide",function(){return{require:"^uibCarousel",restrict:"EA",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/carousel/slide.html"},scope:{active:"=?",actual:"=?",index:"=?"},link:function(a,b,c,d){d.addSlide(a,b),a.$on("$destroy",function(){d.removeSlide(a)}),a.$watch("active",function(b){b&&d.select(a)})}}}).animation(".item",["$injector","$animate",function(a,b){function c(a,b,c){a.removeClass(b),c&&c()}var d="uib-noTransition",e="uib-slideDirection",f=null;return a.has("$animateCss")&&(f=a.get("$animateCss")),{beforeAddClass:function(a,g,h){if("active"==g&&a.parent()&&a.parent().parent()&&!a.parent().parent().data(d)){var i=!1,j=a.data(e),k="next"==j?"left":"right",l=c.bind(this,a,k+" "+j,h);return a.addClass(j),f?f(a,{addClass:k}).start().done(l):b.addClass(a,k).then(function(){i||l(),h()}),function(){i=!0}}h()},beforeRemoveClass:function(a,g,h){if("active"===g&&a.parent()&&a.parent().parent()&&!a.parent().parent().data(d)){var i=!1,j=a.data(e),k="next"==j?"left":"right",l=c.bind(this,a,k,h);return f?f(a,{addClass:k}).start().done(l):b.addClass(a,k).then(function(){i||l(),h()}),function(){i=!0}}h()}}}]),angular.module("ui.bootstrap.carousel").value("$carouselSuppressWarning",!1).controller("CarouselController",["$scope","$element","$controller","$log","$carouselSuppressWarning",function(a,b,c,d,e){return e||d.warn("CarouselController is now deprecated. Use UibCarouselController instead."),c("UibCarouselController",{$scope:a,$element:b})}]).directive("carousel",["$log","$carouselSuppressWarning",function(a,b){return{transclude:!0,replace:!0,controller:"CarouselController",controllerAs:"carousel",require:"carousel",templateUrl:function(a,b){return b.templateUrl||"template/carousel/carousel.html"},scope:{interval:"=",noTransition:"=",noPause:"=",noWrap:"&"},link:function(){b||a.warn("carousel is now deprecated. Use uib-carousel instead.")}}}]).directive("slide",["$log","$carouselSuppressWarning",function(a,b){return{require:"^carousel",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/carousel/slide.html"},scope:{active:"=?",actual:"=?",index:"=?"},link:function(c,d,e,f){b||a.warn("slide is now deprecated. Use uib-slide instead."),f.addSlide(c,d),c.$on("$destroy",function(){f.removeSlide(c)}),c.$watch("active",function(a){a&&f.select(c)})}}}]),angular.module("ui.bootstrap.dateparser",[]).service("uibDateParser",["$log","$locale","orderByFilter",function(a,b,c){function d(a){var b=[],d=a.split("");return angular.forEach(g,function(c,e){var f=a.indexOf(e);if(f>-1){a=a.split(""),d[f]="("+c.regex+")",a[f]="$";for(var g=f+1,h=f+e.length;h>g;g++)d[g]="",a[g]="$";a=a.join(""),b.push({index:f,apply:c.apply})}}),{regex:new RegExp("^"+d.join("")+"$"),map:c(b,"index")}}function e(a,b,c){return 1>c?!1:1===b&&c>28?29===c&&(a%4===0&&a%100!==0||a%400===0):3===b||5===b||8===b||10===b?31>c:!0}var f,g,h=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;this.init=function(){f=b.id,this.parsers={},g={yyyy:{regex:"\\d{4}",apply:function(a){this.year=+a}},yy:{regex:"\\d{2}",apply:function(a){this.year=+a+2e3}},y:{regex:"\\d{1,4}",apply:function(a){this.year=+a}},MMMM:{regex:b.DATETIME_FORMATS.MONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.MONTH.indexOf(a)}},MMM:{regex:b.DATETIME_FORMATS.SHORTMONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.SHORTMONTH.indexOf(a)}},MM:{regex:"0[1-9]|1[0-2]",apply:function(a){this.month=a-1}},M:{regex:"[1-9]|1[0-2]",apply:function(a){this.month=a-1}},dd:{regex:"[0-2][0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},d:{regex:"[1-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},EEEE:{regex:b.DATETIME_FORMATS.DAY.join("|")},EEE:{regex:b.DATETIME_FORMATS.SHORTDAY.join("|")},HH:{regex:"(?:0|1)[0-9]|2[0-3]",apply:function(a){this.hours=+a}},hh:{regex:"0[0-9]|1[0-2]",apply:function(a){this.hours=+a}},H:{regex:"1?[0-9]|2[0-3]",apply:function(a){this.hours=+a}},h:{regex:"[0-9]|1[0-2]",apply:function(a){this.hours=+a}},mm:{regex:"[0-5][0-9]",apply:function(a){this.minutes=+a}},m:{regex:"[0-9]|[1-5][0-9]",apply:function(a){this.minutes=+a}},sss:{regex:"[0-9][0-9][0-9]",apply:function(a){this.milliseconds=+a}},ss:{regex:"[0-5][0-9]",apply:function(a){this.seconds=+a}},s:{regex:"[0-9]|[1-5][0-9]",apply:function(a){this.seconds=+a}},a:{regex:b.DATETIME_FORMATS.AMPMS.join("|"),apply:function(a){12===this.hours&&(this.hours=0),"PM"===a&&(this.hours+=12)}}}},this.init(),this.parse=function(c,g,i){if(!angular.isString(c)||!g)return c;g=b.DATETIME_FORMATS[g]||g,g=g.replace(h,"\\$&"),b.id!==f&&this.init(),this.parsers[g]||(this.parsers[g]=d(g));var j=this.parsers[g],k=j.regex,l=j.map,m=c.match(k);if(m&&m.length){var n,o;angular.isDate(i)&&!isNaN(i.getTime())?n={year:i.getFullYear(),month:i.getMonth(),date:i.getDate(),hours:i.getHours(),minutes:i.getMinutes(),seconds:i.getSeconds(),milliseconds:i.getMilliseconds()}:(i&&a.warn("dateparser:","baseDate is not a valid date"),n={year:1900,month:0,date:1,hours:0,minutes:0,seconds:0,milliseconds:0});for(var p=1,q=m.length;q>p;p++){var r=l[p-1];r.apply&&r.apply.call(n,m[p])}return e(n.year,n.month,n.date)&&(o=new Date(n.year,n.month,n.date,n.hours,n.minutes,n.seconds,n.milliseconds||0)),o}}}]),angular.module("ui.bootstrap.dateparser").value("$dateParserSuppressWarning",!1).service("dateParser",["$log","$dateParserSuppressWarning","uibDateParser",function(a,b,c){b||a.warn("dateParser is now deprecated. Use uibDateParser instead."),angular.extend(this,c)}]),angular.module("ui.bootstrap.position",[]).factory("$uibPosition",["$document","$window",function(a,b){function c(a,c){return a.currentStyle?a.currentStyle[c]:b.getComputedStyle?b.getComputedStyle(a)[c]:a.style[c]}function d(a){return"static"===(c(a,"position")||"static")}var e=function(b){for(var c=a[0],e=b.offsetParent||c;e&&e!==c&&d(e);)e=e.offsetParent;return e||c};return{position:function(b){var c=this.offset(b),d={top:0,left:0},f=e(b[0]);f!=a[0]&&(d=this.offset(angular.element(f)),d.top+=f.clientTop-f.scrollTop,d.left+=f.clientLeft-f.scrollLeft);var g=b[0].getBoundingClientRect();return{width:g.width||b.prop("offsetWidth"),height:g.height||b.prop("offsetHeight"),top:c.top-d.top,left:c.left-d.left}},offset:function(c){var d=c[0].getBoundingClientRect();return{width:d.width||c.prop("offsetWidth"),height:d.height||c.prop("offsetHeight"),top:d.top+(b.pageYOffset||a[0].documentElement.scrollTop),left:d.left+(b.pageXOffset||a[0].documentElement.scrollLeft)}},positionElements:function(a,b,c,d){var e,f,g,h,i=c.split("-"),j=i[0],k=i[1]||"center";e=d?this.offset(a):this.position(a),f=b.prop("offsetWidth"),g=b.prop("offsetHeight");var l={center:function(){return e.left+e.width/2-f/2},left:function(){return e.left},right:function(){return e.left+e.width}},m={center:function(){return e.top+e.height/2-g/2},top:function(){return e.top},bottom:function(){return e.top+e.height}};switch(j){case"right":h={top:m[k](),left:l[j]()};break;case"left":h={top:m[k](),left:e.left-f};break;case"bottom":h={top:m[j](),left:l[k]()};break;default:h={top:e.top-g,left:l[k]()}}return h}}}]),angular.module("ui.bootstrap.position").value("$positionSuppressWarning",!1).service("$position",["$log","$positionSuppressWarning","$uibPosition",function(a,b,c){b||a.warn("$position is now deprecated. Use $uibPosition instead."),angular.extend(this,c)}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.dateparser","ui.bootstrap.position"]).value("$datepickerSuppressError",!1).constant("uibDatepickerConfig",{formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",datepickerMode:"day",minMode:"day",maxMode:"year",showWeeks:!0,startingDay:0,yearRange:20,minDate:null,maxDate:null,shortcutPropagation:!1}).controller("UibDatepickerController",["$scope","$attrs","$parse","$interpolate","$log","dateFilter","uibDatepickerConfig","$datepickerSuppressError",function(a,b,c,d,e,f,g,h){var i=this,j={$setViewValue:angular.noop};this.modes=["day","month","year"],angular.forEach(["formatDay","formatMonth","formatYear","formatDayHeader","formatDayTitle","formatMonthTitle","showWeeks","startingDay","yearRange","shortcutPropagation"],function(c,e){i[c]=angular.isDefined(b[c])?6>e?d(b[c])(a.$parent):a.$parent.$eval(b[c]):g[c]}),angular.forEach(["minDate","maxDate"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(a){i[d]=a?new Date(a):null,i.refreshView()}):i[d]=g[d]?new Date(g[d]):null}),angular.forEach(["minMode","maxMode"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(c){i[d]=angular.isDefined(c)?c:b[d],a[d]=i[d],("minMode"==d&&i.modes.indexOf(a.datepickerMode)<i.modes.indexOf(i[d])||"maxMode"==d&&i.modes.indexOf(a.datepickerMode)>i.modes.indexOf(i[d]))&&(a.datepickerMode=i[d])}):(i[d]=g[d]||null,a[d]=i[d])}),a.datepickerMode=a.datepickerMode||g.datepickerMode,a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),angular.isDefined(b.initDate)?(this.activeDate=a.$parent.$eval(b.initDate)||new Date,a.$parent.$watch(b.initDate,function(a){a&&(j.$isEmpty(j.$modelValue)||j.$invalid)&&(i.activeDate=a,i.refreshView())})):this.activeDate=new Date,a.isActive=function(b){return 0===i.compare(b.date,i.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(a){j=a,j.$render=function(){i.render()}},this.render=function(){if(j.$viewValue){var a=new Date(j.$viewValue),b=!isNaN(a);b?this.activeDate=a:h||e.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')}this.refreshView()},this.refreshView=function(){if(this.element){this._refreshView();var a=j.$viewValue?new Date(j.$viewValue):null;j.$setValidity("dateDisabled",!a||this.element&&!this.isDisabled(a))}},this.createDateObject=function(a,b){var c=j.$viewValue?new Date(j.$viewValue):null;return{date:a,label:f(a,b),selected:c&&0===this.compare(a,c),disabled:this.isDisabled(a),current:0===this.compare(a,new Date),customClass:this.customClass(a)}},this.isDisabled=function(c){return this.minDate&&this.compare(c,this.minDate)<0||this.maxDate&&this.compare(c,this.maxDate)>0||b.dateDisabled&&a.dateDisabled({date:c,mode:a.datepickerMode})},this.customClass=function(b){return a.customClass({date:b,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},this.fixTimeZone=function(a){var b=a.getHours();a.setHours(23===b?b+2:0)},a.select=function(b){if(a.datepickerMode===i.minMode){var c=j.$viewValue?new Date(j.$viewValue):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),j.$setViewValue(c),j.$render()}else i.activeDate=b,a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)-1]},a.move=function(a){var b=i.activeDate.getFullYear()+a*(i.step.years||0),c=i.activeDate.getMonth()+a*(i.step.months||0);i.activeDate.setFullYear(b,c,1),i.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===i.maxMode&&1===b||a.datepickerMode===i.minMode&&-1===b||(a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)+b])},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var k=function(){i.element[0].focus()};a.$on("uib:datepicker.focus",k),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey)if(b.preventDefault(),i.shortcutPropagation||b.stopPropagation(),"enter"===c||"space"===c){if(i.isDisabled(i.activeDate))return;a.select(i.activeDate)}else!b.ctrlKey||"up"!==c&&"down"!==c?(i.handleKeyDown(c,b),i.refreshView()):a.toggleMode("up"===c?1:-1)}}]).controller("UibDaypickerController",["$scope","$element","dateFilter",function(a,b,c){function d(a,b){return 1!==b||a%4!==0||a%100===0&&a%400!==0?f[b]:29}function e(a){var b=new Date(a);b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1}var f=[31,28,31,30,31,30,31,31,30,31,30,31];this.step={months:1},this.element=b,this.init=function(b){angular.extend(b,this),a.showWeeks=b.showWeeks,b.refreshView()},this.getDates=function(a,b){for(var c,d=new Array(b),e=new Date(a),f=0;b>f;)c=new Date(e),this.fixTimeZone(c),d[f++]=c,e.setDate(e.getDate()+1);return d},this._refreshView=function(){var b=this.activeDate.getFullYear(),d=this.activeDate.getMonth(),f=new Date(b,d,1),g=this.startingDay-f.getDay(),h=g>0?7-g:-g,i=new Date(f);h>0&&i.setDate(-h+1);for(var j=this.getDates(i,42),k=0;42>k;k++)j[k]=angular.extend(this.createDateObject(j[k],this.formatDay),{secondary:j[k].getMonth()!==d,uid:a.uniqueId+"-"+k});a.labels=new Array(7);for(var l=0;7>l;l++)a.labels[l]={abbr:c(j[l].date,this.formatDayHeader),full:c(j[l].date,"EEEE")};if(a.title=c(this.activeDate,this.formatDayTitle),a.rows=this.split(j,7),a.showWeeks){a.weekNumbers=[];for(var m=(11-this.startingDay)%7,n=a.rows.length,o=0;n>o;o++)a.weekNumbers.push(e(a.rows[o][m].date))}},this.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},this.handleKeyDown=function(a,b){var c=this.activeDate.getDate();if("left"===a)c-=1;else if("up"===a)c-=7;else if("right"===a)c+=1;else if("down"===a)c+=7;else if("pageup"===a||"pagedown"===a){var e=this.activeDate.getMonth()+("pageup"===a?-1:1);this.activeDate.setMonth(e,1),c=Math.min(d(this.activeDate.getFullYear(),this.activeDate.getMonth()),c)}else"home"===a?c=1:"end"===a&&(c=d(this.activeDate.getFullYear(),this.activeDate.getMonth()));this.activeDate.setDate(c)}}]).controller("UibMonthpickerController",["$scope","$element","dateFilter",function(a,b,c){this.step={years:1},this.element=b,this.init=function(a){angular.extend(a,this),a.refreshView()},this._refreshView=function(){for(var b,d=new Array(12),e=this.activeDate.getFullYear(),f=0;12>f;f++)b=new Date(e,f,1),this.fixTimeZone(b),d[f]=angular.extend(this.createDateObject(b,this.formatMonth),{uid:a.uniqueId+"-"+f});a.title=c(this.activeDate,this.formatMonthTitle),a.rows=this.split(d,3)},this.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth())-new Date(b.getFullYear(),b.getMonth())},this.handleKeyDown=function(a,b){var c=this.activeDate.getMonth();if("left"===a)c-=1;else if("up"===a)c-=3;else if("right"===a)c+=1;else if("down"===a)c+=3;else if("pageup"===a||"pagedown"===a){var d=this.activeDate.getFullYear()+("pageup"===a?-1:1);this.activeDate.setFullYear(d)}else"home"===a?c=0:"end"===a&&(c=11);this.activeDate.setMonth(c)}}]).controller("UibYearpickerController",["$scope","$element","dateFilter",function(a,b,c){function d(a){return parseInt((a-1)/e,10)*e+1}var e;this.element=b,this.yearpickerInit=function(){e=this.yearRange,this.step={years:e}},this._refreshView=function(){for(var b,c=new Array(e),f=0,g=d(this.activeDate.getFullYear());e>f;f++)b=new Date(g+f,0,1),this.fixTimeZone(b),c[f]=angular.extend(this.createDateObject(b,this.formatYear),{uid:a.uniqueId+"-"+f});a.title=[c[0].label,c[e-1].label].join(" - "),a.rows=this.split(c,5)},this.compare=function(a,b){return a.getFullYear()-b.getFullYear()},this.handleKeyDown=function(a,b){var c=this.activeDate.getFullYear();"left"===a?c-=1:"up"===a?c-=5:"right"===a?c+=1:"down"===a?c+=5:"pageup"===a||"pagedown"===a?c+=("pageup"===a?-1:1)*this.step.years:"home"===a?c=d(this.activeDate.getFullYear()):"end"===a&&(c=d(this.activeDate.getFullYear())+e-1),this.activeDate.setFullYear(c)}}]).directive("uibDatepicker",function(){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/datepicker.html"},scope:{datepickerMode:"=?",dateDisabled:"&",customClass:"&",shortcutPropagation:"&?"},require:["uibDatepicker","^ngModel"],controller:"UibDatepickerController",controllerAs:"datepicker",link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}).directive("uibDaypicker",function(){return{replace:!0,templateUrl:"template/datepicker/day.html",require:["^?uibDatepicker","uibDaypicker","^?datepicker"],controller:"UibDaypickerController",link:function(a,b,c,d){var e=d[0]||d[2],f=d[1];f.init(e)}}}).directive("uibMonthpicker",function(){return{replace:!0,templateUrl:"template/datepicker/month.html",require:["^?uibDatepicker","uibMonthpicker","^?datepicker"],controller:"UibMonthpickerController",link:function(a,b,c,d){var e=d[0]||d[2],f=d[1];f.init(e)}}}).directive("uibYearpicker",function(){return{replace:!0,templateUrl:"template/datepicker/year.html",require:["^?uibDatepicker","uibYearpicker","^?datepicker"],controller:"UibYearpickerController",link:function(a,b,c,d){var e=d[0]||d[2];angular.extend(e,d[1]),e.yearpickerInit(),e.refreshView()}}}).constant("uibDatepickerPopupConfig",{datepickerPopup:"yyyy-MM-dd",datepickerPopupTemplateUrl:"template/datepicker/popup.html",datepickerTemplateUrl:"template/datepicker/datepicker.html",html5Types:{date:"yyyy-MM-dd","datetime-local":"yyyy-MM-ddTHH:mm:ss.sss",month:"yyyy-MM"},currentText:"Today",clearText:"Clear",closeText:"Done",closeOnDateSelection:!0,appendToBody:!1,showButtonBar:!0,onOpenFocus:!0}).controller("UibDatepickerPopupController",["$scope","$element","$attrs","$compile","$parse","$document","$rootScope","$uibPosition","dateFilter","uibDateParser","uibDatepickerPopupConfig","$timeout",function(a,b,c,d,e,f,g,h,i,j,k,l){function m(a){return a.replace(/([A-Z])/g,function(a){
return"-"+a.toLowerCase()})}function n(b){if(angular.isNumber(b)&&(b=new Date(b)),b){if(angular.isDate(b)&&!isNaN(b))return b;if(angular.isString(b)){var c=j.parse(b,r,a.date);return isNaN(c)?void 0:c}return void 0}return null}function o(a,b){var d=a||b;if(!c.ngRequired&&!d)return!0;if(angular.isNumber(d)&&(d=new Date(d)),d){if(angular.isDate(d)&&!isNaN(d))return!0;if(angular.isString(d)){var e=j.parse(d,r);return!isNaN(e)}return!1}return!0}function p(c){var d=A[0],e=b[0].contains(c.target),f=void 0!==d.contains&&d.contains(c.target);!a.isOpen||e||f||a.$apply(function(){a.isOpen=!1})}function q(c){27===c.which&&a.isOpen?(c.preventDefault(),c.stopPropagation(),a.$apply(function(){a.isOpen=!1}),b[0].focus()):40!==c.which||a.isOpen||(c.preventDefault(),c.stopPropagation(),a.$apply(function(){a.isOpen=!0}))}var r,s,t,u,v,w,x,y,z,A,B={},C=!1;a.watchData={},this.init=function(h){if(z=h,s=angular.isDefined(c.closeOnDateSelection)?a.$parent.$eval(c.closeOnDateSelection):k.closeOnDateSelection,t=angular.isDefined(c.datepickerAppendToBody)?a.$parent.$eval(c.datepickerAppendToBody):k.appendToBody,u=angular.isDefined(c.onOpenFocus)?a.$parent.$eval(c.onOpenFocus):k.onOpenFocus,v=angular.isDefined(c.datepickerPopupTemplateUrl)?c.datepickerPopupTemplateUrl:k.datepickerPopupTemplateUrl,w=angular.isDefined(c.datepickerTemplateUrl)?c.datepickerTemplateUrl:k.datepickerTemplateUrl,a.showButtonBar=angular.isDefined(c.showButtonBar)?a.$parent.$eval(c.showButtonBar):k.showButtonBar,k.html5Types[c.type]?(r=k.html5Types[c.type],C=!0):(r=c.datepickerPopup||k.datepickerPopup,c.$observe("uibDatepickerPopup",function(a,b){var c=a||k.datepickerPopup;if(c!==r&&(r=c,z.$modelValue=null,!r))throw new Error("uibDatepickerPopup must have a date format specified.")})),!r)throw new Error("uibDatepickerPopup must have a date format specified.");if(C&&c.datepickerPopup)throw new Error("HTML5 date input types do not support custom formats.");if(x=angular.element("<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>"),x.attr({"ng-model":"date","ng-change":"dateSelection(date)","template-url":v}),y=angular.element(x.children()[0]),y.attr("template-url",w),C&&"month"===c.type&&(y.attr("datepicker-mode",'"month"'),y.attr("min-mode","month")),c.datepickerOptions){var l=a.$parent.$eval(c.datepickerOptions);l&&l.initDate&&(a.initDate=l.initDate,y.attr("init-date","initDate"),delete l.initDate),angular.forEach(l,function(a,b){y.attr(m(b),a)})}angular.forEach(["minMode","maxMode","minDate","maxDate","datepickerMode","initDate","shortcutPropagation"],function(b){if(c[b]){var d=e(c[b]);if(a.$parent.$watch(d,function(c){a.watchData[b]=c,("minDate"===b||"maxDate"===b)&&(B[b]=new Date(c))}),y.attr(m(b),"watchData."+b),"datepickerMode"===b){var f=d.assign;a.$watch("watchData."+b,function(b,c){angular.isFunction(f)&&b!==c&&f(a.$parent,b)})}}}),c.dateDisabled&&y.attr("date-disabled","dateDisabled({ date: date, mode: mode })"),c.showWeeks&&y.attr("show-weeks",c.showWeeks),c.customClass&&y.attr("custom-class","customClass({ date: date, mode: mode })"),C?z.$formatters.push(function(b){return a.date=b,b}):(z.$$parserName="date",z.$validators.date=o,z.$parsers.unshift(n),z.$formatters.push(function(b){return a.date=b,z.$isEmpty(b)?b:i(b,r)})),z.$viewChangeListeners.push(function(){a.date=j.parse(z.$viewValue,r,a.date)}),b.bind("keydown",q),A=d(x)(a),x.remove(),t?f.find("body").append(A):b.after(A),a.$on("$destroy",function(){a.isOpen===!0&&(g.$$phase||a.$apply(function(){a.isOpen=!1})),A.remove(),b.unbind("keydown",q),f.unbind("click",p)})},a.getText=function(b){return a[b+"Text"]||k[b+"Text"]},a.isDisabled=function(b){return"today"===b&&(b=new Date),a.watchData.minDate&&a.compare(b,B.minDate)<0||a.watchData.maxDate&&a.compare(b,B.maxDate)>0},a.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},a.dateSelection=function(c){angular.isDefined(c)&&(a.date=c);var d=a.date?i(a.date,r):null;b.val(d),z.$setViewValue(d),s&&(a.isOpen=!1,b[0].focus())},a.keydown=function(c){27===c.which&&(a.isOpen=!1,b[0].focus())},a.select=function(b){if("today"===b){var c=new Date;angular.isDate(a.date)?(b=new Date(a.date),b.setFullYear(c.getFullYear(),c.getMonth(),c.getDate())):b=new Date(c.setHours(0,0,0,0))}a.dateSelection(b)},a.close=function(){a.isOpen=!1,b[0].focus()},a.$watch("isOpen",function(c){c?(a.position=t?h.offset(b):h.position(b),a.position.top=a.position.top+b.prop("offsetHeight"),l(function(){u&&a.$broadcast("uib:datepicker.focus"),f.bind("click",p)},0,!1)):f.unbind("click",p)})}]).directive("uibDatepickerPopup",function(){return{require:["ngModel","uibDatepickerPopup"],controller:"UibDatepickerPopupController",scope:{isOpen:"=?",currentText:"@",clearText:"@",closeText:"@",dateDisabled:"&",customClass:"&"},link:function(a,b,c,d){var e=d[0],f=d[1];f.init(e)}}}).directive("uibDatepickerPopupWrap",function(){return{replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/popup.html"}}}),angular.module("ui.bootstrap.datepicker").value("$datepickerSuppressWarning",!1).controller("DatepickerController",["$scope","$attrs","$log","$datepickerSuppressWarning","$controller",function(a,b,c,d,e){return d||c.warn("DatepickerController is now deprecated. Use UibDatepickerController instead."),e("UibDatepickerController",{$scope:a,$attrs:b})}]).directive("datepicker",["$log","$datepickerSuppressWarning",function(a,b){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/datepicker.html"},scope:{datepickerMode:"=?",dateDisabled:"&",customClass:"&",shortcutPropagation:"&?"},require:["datepicker","^ngModel"],controller:"DatepickerController",controllerAs:"datepicker",link:function(c,d,e,f){b||a.warn("datepicker is now deprecated. Use uib-datepicker instead.");var g=f[0],h=f[1];g.init(h)}}}]).directive("daypicker",["$log","$datepickerSuppressWarning",function(a,b){return{replace:!0,templateUrl:"template/datepicker/day.html",require:["^datepicker","daypicker"],controller:"UibDaypickerController",link:function(c,d,e,f){b||a.warn("daypicker is now deprecated. Use uib-daypicker instead.");var g=f[0],h=f[1];h.init(g)}}}]).directive("monthpicker",["$log","$datepickerSuppressWarning",function(a,b){return{replace:!0,templateUrl:"template/datepicker/month.html",require:["^datepicker","monthpicker"],controller:"UibMonthpickerController",link:function(c,d,e,f){b||a.warn("monthpicker is now deprecated. Use uib-monthpicker instead.");var g=f[0],h=f[1];h.init(g)}}}]).directive("yearpicker",["$log","$datepickerSuppressWarning",function(a,b){return{replace:!0,templateUrl:"template/datepicker/year.html",require:["^datepicker","yearpicker"],controller:"UibYearpickerController",link:function(c,d,e,f){b||a.warn("yearpicker is now deprecated. Use uib-yearpicker instead.");var g=f[0];angular.extend(g,f[1]),g.yearpickerInit(),g.refreshView()}}}]).directive("datepickerPopup",["$log","$datepickerSuppressWarning",function(a,b){return{require:["ngModel","datepickerPopup"],controller:"UibDatepickerPopupController",scope:{isOpen:"=?",currentText:"@",clearText:"@",closeText:"@",dateDisabled:"&",customClass:"&"},link:function(c,d,e,f){b||a.warn("datepicker-popup is now deprecated. Use uib-datepicker-popup instead.");var g=f[0],h=f[1];h.init(g)}}}]).directive("datepickerPopupWrap",["$log","$datepickerSuppressWarning",function(a,b){return{replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/popup.html"},link:function(){b||a.warn("datepicker-popup-wrap is now deprecated. Use uib-datepicker-popup-wrap instead.")}}}]),angular.module("ui.bootstrap.dropdown",["ui.bootstrap.position"]).constant("uibDropdownConfig",{openClass:"open"}).service("uibDropdownService",["$document","$rootScope",function(a,b){var c=null;this.open=function(b){c||(a.bind("click",d),a.bind("keydown",e)),c&&c!==b&&(c.isOpen=!1),c=b},this.close=function(b){c===b&&(c=null,a.unbind("click",d),a.unbind("keydown",e))};var d=function(a){if(c&&(!a||"disabled"!==c.getAutoClose())){var d=c.getToggleElement();if(!(a&&d&&d[0].contains(a.target))){var e=c.getDropdownElement();a&&"outsideClick"===c.getAutoClose()&&e&&e[0].contains(a.target)||(c.isOpen=!1,b.$$phase||c.$apply())}}},e=function(a){27===a.which?(c.focusToggleElement(),d()):c.isKeynavEnabled()&&/(38|40)/.test(a.which)&&c.isOpen&&(a.preventDefault(),a.stopPropagation(),c.focusDropdownEntry(a.which))}}]).controller("UibDropdownController",["$scope","$element","$attrs","$parse","uibDropdownConfig","uibDropdownService","$animate","$uibPosition","$document","$compile","$templateRequest",function(a,b,c,d,e,f,g,h,i,j,k){var l,m,n=this,o=a.$new(),p=e.openClass,q=angular.noop,r=c.onToggle?d(c.onToggle):angular.noop,s=!1,t=!1;b.addClass("dropdown"),this.init=function(){c.isOpen&&(m=d(c.isOpen),q=m.assign,a.$watch(m,function(a){o.isOpen=!!a})),s=angular.isDefined(c.dropdownAppendToBody),t=angular.isDefined(c.uibKeyboardNav),s&&n.dropdownMenu&&(i.find("body").append(n.dropdownMenu),b.on("$destroy",function(){n.dropdownMenu.remove()}))},this.toggle=function(a){return o.isOpen=arguments.length?!!a:!o.isOpen},this.isOpen=function(){return o.isOpen},o.getToggleElement=function(){return n.toggleElement},o.getAutoClose=function(){return c.autoClose||"always"},o.getElement=function(){return b},o.isKeynavEnabled=function(){return t},o.focusDropdownEntry=function(a){var c=n.dropdownMenu?angular.element(n.dropdownMenu).find("a"):angular.element(b).find("ul").eq(0).find("a");switch(a){case 40:angular.isNumber(n.selectedOption)?n.selectedOption=n.selectedOption===c.length-1?n.selectedOption:n.selectedOption+1:n.selectedOption=0;break;case 38:angular.isNumber(n.selectedOption)?n.selectedOption=0===n.selectedOption?0:n.selectedOption-1:n.selectedOption=c.length-1}c[n.selectedOption].focus()},o.getDropdownElement=function(){return n.dropdownMenu},o.focusToggleElement=function(){n.toggleElement&&n.toggleElement[0].focus()},o.$watch("isOpen",function(c,d){if(s&&n.dropdownMenu){var e=h.positionElements(b,n.dropdownMenu,"bottom-left",!0),i={top:e.top+"px",display:c?"block":"none"},m=n.dropdownMenu.hasClass("dropdown-menu-right");m?(i.left="auto",i.right=window.innerWidth-(e.left+b.prop("offsetWidth"))+"px"):(i.left=e.left+"px",i.right="auto"),n.dropdownMenu.css(i)}if(g[c?"addClass":"removeClass"](b,p).then(function(){angular.isDefined(c)&&c!==d&&r(a,{open:!!c})}),c)n.dropdownMenuTemplateUrl&&k(n.dropdownMenuTemplateUrl).then(function(a){l=o.$new(),j(a.trim())(l,function(a){var b=a;n.dropdownMenu.replaceWith(b),n.dropdownMenu=b})}),o.focusToggleElement(),f.open(o);else{if(n.dropdownMenuTemplateUrl){l&&l.$destroy();var t=angular.element('<ul class="dropdown-menu"></ul>');n.dropdownMenu.replaceWith(t),n.dropdownMenu=t}f.close(o),n.selectedOption=null}angular.isFunction(q)&&q(a,c)}),a.$on("$locationChangeSuccess",function(){"disabled"!==o.getAutoClose()&&(o.isOpen=!1)});var u=a.$on("$destroy",function(){o.$destroy()});o.$on("$destroy",u)}]).directive("uibDropdown",function(){return{controller:"UibDropdownController",link:function(a,b,c,d){d.init()}}}).directive("uibDropdownMenu",function(){return{restrict:"AC",require:"?^uibDropdown",link:function(a,b,c,d){if(d&&!angular.isDefined(c.dropdownNested)){b.addClass("dropdown-menu");var e=c.templateUrl;e&&(d.dropdownMenuTemplateUrl=e),d.dropdownMenu||(d.dropdownMenu=b)}}}}).directive("uibKeyboardNav",function(){return{restrict:"A",require:"?^uibDropdown",link:function(a,b,c,d){b.bind("keydown",function(a){if(-1!==[38,40].indexOf(a.which)){a.preventDefault(),a.stopPropagation();var b=d.dropdownMenu.find("a");switch(a.which){case 40:angular.isNumber(d.selectedOption)?d.selectedOption=d.selectedOption===b.length-1?d.selectedOption:d.selectedOption+1:d.selectedOption=0;break;case 38:angular.isNumber(d.selectedOption)?d.selectedOption=0===d.selectedOption?0:d.selectedOption-1:d.selectedOption=b.length-1}b[d.selectedOption].focus()}})}}}).directive("uibDropdownToggle",function(){return{require:"?^uibDropdown",link:function(a,b,c,d){if(d){b.addClass("dropdown-toggle"),d.toggleElement=b;var e=function(e){e.preventDefault(),b.hasClass("disabled")||c.disabled||a.$apply(function(){d.toggle()})};b.bind("click",e),b.attr({"aria-haspopup":!0,"aria-expanded":!1}),a.$watch(d.isOpen,function(a){b.attr("aria-expanded",!!a)}),a.$on("$destroy",function(){b.unbind("click",e)})}}}}),angular.module("ui.bootstrap.dropdown").value("$dropdownSuppressWarning",!1).service("dropdownService",["$log","$dropdownSuppressWarning","uibDropdownService",function(a,b,c){b||a.warn("dropdownService is now deprecated. Use uibDropdownService instead."),angular.extend(this,c)}]).controller("DropdownController",["$scope","$element","$attrs","$log","$dropdownSuppressWarning","$controller",function(a,b,c,d,e,f){return e||d.warn("DropdownController is now deprecated. Use UibDropdownController instead."),f("UibDropdownController",{$scope:a,$element:b,$attrs:c})}]).directive("dropdown",["$log","$dropdownSuppressWarning",function(a,b){return{controller:"DropdownController",link:function(c,d,e,f){b||a.warn("dropdown is now deprecated. Use uib-dropdown instead."),f.init()}}}]).directive("dropdownMenu",["$log","$dropdownSuppressWarning",function(a,b){return{restrict:"AC",require:"?^dropdown",link:function(c,d,e,f){if(f){b||a.warn("dropdown-menu is now deprecated. Use uib-dropdown-menu instead."),d.addClass("dropdown-menu");var g=e.templateUrl;g&&(f.dropdownMenuTemplateUrl=g),f.dropdownMenu||(f.dropdownMenu=d)}}}}]).directive("keyboardNav",["$log","$dropdownSuppressWarning",function(a,b){return{restrict:"A",require:"?^dropdown",link:function(c,d,e,f){b||a.warn("keyboard-nav is now deprecated. Use uib-keyboard-nav instead."),d.bind("keydown",function(a){if(-1!==[38,40].indexOf(a.which)){a.preventDefault(),a.stopPropagation();var b=f.dropdownMenu.find("a");switch(a.which){case 40:angular.isNumber(f.selectedOption)?f.selectedOption=f.selectedOption===b.length-1?f.selectedOption:f.selectedOption+1:f.selectedOption=0;break;case 38:angular.isNumber(f.selectedOption)?f.selectedOption=0===f.selectedOption?0:f.selectedOption-1:f.selectedOption=b.length-1}b[f.selectedOption].focus()}})}}}]).directive("dropdownToggle",["$log","$dropdownSuppressWarning",function(a,b){return{require:"?^dropdown",link:function(c,d,e,f){if(b||a.warn("dropdown-toggle is now deprecated. Use uib-dropdown-toggle instead."),f){d.addClass("dropdown-toggle"),f.toggleElement=d;var g=function(a){a.preventDefault(),d.hasClass("disabled")||e.disabled||c.$apply(function(){f.toggle()})};d.bind("click",g),d.attr({"aria-haspopup":!0,"aria-expanded":!1}),c.$watch(f.isOpen,function(a){d.attr("aria-expanded",!!a)}),c.$on("$destroy",function(){d.unbind("click",g)})}}}}]),angular.module("ui.bootstrap.stackedMap",[]).factory("$$stackedMap",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b==a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b==a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.splice(a.length-1,1)[0]},length:function(){return a.length}}}}}),angular.module("ui.bootstrap.modal",["ui.bootstrap.stackedMap"]).factory("$$multiMap",function(){return{createNew:function(){var a={};return{entries:function(){return Object.keys(a).map(function(b){return{key:b,value:a[b]}})},get:function(b){return a[b]},hasKey:function(b){return!!a[b]},keys:function(){return Object.keys(a)},put:function(b,c){a[b]||(a[b]=[]),a[b].push(c)},remove:function(b,c){var d=a[b];if(d){var e=d.indexOf(c);-1!==e&&d.splice(e,1),d.length||delete a[b]}}}}}}).directive("uibModalBackdrop",["$animate","$injector","$uibModalStack",function(a,b,c){function d(b,d,f){d.addClass("modal-backdrop"),f.modalInClass&&(e?e(d,{addClass:f.modalInClass}).start():a.addClass(d,f.modalInClass),b.$on(c.NOW_CLOSING_EVENT,function(b,c){var g=c();e?e(d,{removeClass:f.modalInClass}).start().then(g):a.removeClass(d,f.modalInClass).then(g)}))}var e=null;return b.has("$animateCss")&&(e=b.get("$animateCss")),{replace:!0,templateUrl:"template/modal/backdrop.html",compile:function(a,b){return a.addClass(b.backdropClass),d}}}]).directive("uibModalWindow",["$uibModalStack","$q","$animate","$injector",function(a,b,c,d){var e=null;return d.has("$animateCss")&&(e=d.get("$animateCss")),{scope:{index:"@"},replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/modal/window.html"},link:function(d,f,g){f.addClass(g.windowClass||""),f.addClass(g.windowTopClass||""),d.size=g.size,d.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!==c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))},f.on("click",d.close),d.$isRendered=!0;var h=b.defer();g.$observe("modalRender",function(a){"true"==a&&h.resolve()}),h.promise.then(function(){var h=null;g.modalInClass&&(h=e?e(f,{addClass:g.modalInClass}).start():c.addClass(f,g.modalInClass),d.$on(a.NOW_CLOSING_EVENT,function(a,b){var d=b();e?e(f,{removeClass:g.modalInClass}).start().then(d):c.removeClass(f,g.modalInClass).then(d)})),b.when(h).then(function(){var a=f[0].querySelectorAll("[autofocus]");a.length?a[0].focus():f[0].focus()});var i=a.getTop();i&&a.modalRendered(i.key)})}}}]).directive("uibModalAnimationClass",[function(){return{compile:function(a,b){b.modalAnimation&&a.addClass(b.uibModalAnimationClass)}}}]).directive("uibModalTransclude",function(){return{link:function(a,b,c,d,e){e(a.$parent,function(a){b.empty(),b.append(a)})}}}).factory("$uibModalStack",["$animate","$timeout","$document","$compile","$rootScope","$q","$injector","$$multiMap","$$stackedMap",function(a,b,c,d,e,f,g,h,i){function j(){for(var a=-1,b=u.keys(),c=0;c<b.length;c++)u.get(b[c]).value.backdrop&&(a=c);return a}function k(a,b){var d=c.find("body").eq(0),e=u.get(a).value;u.remove(a),n(e.modalDomEl,e.modalScope,function(){var b=e.openedClass||t;v.remove(b,a),d.toggleClass(b,v.hasKey(b)),l(!0)}),m(),b&&b.focus?b.focus():d.focus()}function l(a){var b;u.length()>0&&(b=u.top().value,b.modalDomEl.toggleClass(b.windowTopClass||"",a))}function m(){if(q&&-1==j()){var a=r;n(q,r,function(){a=null}),q=void 0,r=void 0}}function n(b,c,d){function e(){e.done||(e.done=!0,p?p(b,{event:"leave"}).start().then(function(){b.remove()}):a.leave(b),c.$destroy(),d&&d())}var g,h=null,i=function(){return g||(g=f.defer(),h=g.promise),function(){g.resolve()}};return c.$broadcast(w.NOW_CLOSING_EVENT,i),f.when(h).then(e)}function o(a,b,c){return!a.value.modalScope.$broadcast("modal.closing",b,c).defaultPrevented}var p=null;g.has("$animateCss")&&(p=g.get("$animateCss"));var q,r,s,t="modal-open",u=i.createNew(),v=h.createNew(),w={NOW_CLOSING_EVENT:"modal.stack.now-closing"},x=0,y="a[href], area[href], input:not([disabled]), button:not([disabled]),select:not([disabled]), textarea:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable=true]";return e.$watch(j,function(a){r&&(r.index=a)}),c.bind("keydown",function(a){if(a.isDefaultPrevented())return a;var b=u.top();if(b&&b.value.keyboard)switch(a.which){case 27:a.preventDefault(),e.$apply(function(){w.dismiss(b.key,"escape key press")});break;case 9:w.loadFocusElementList(b);var c=!1;a.shiftKey?w.isFocusInFirstItem(a)&&(c=w.focusLastFocusableElement()):w.isFocusInLastItem(a)&&(c=w.focusFirstFocusableElement()),c&&(a.preventDefault(),a.stopPropagation())}}),w.open=function(a,b){var f=c[0].activeElement,g=b.openedClass||t;l(!1),u.add(a,{deferred:b.deferred,renderDeferred:b.renderDeferred,modalScope:b.scope,backdrop:b.backdrop,keyboard:b.keyboard,openedClass:b.openedClass,windowTopClass:b.windowTopClass}),v.put(g,a);var h=c.find("body").eq(0),i=j();if(i>=0&&!q){r=e.$new(!0),r.index=i;var k=angular.element('<div uib-modal-backdrop="modal-backdrop"></div>');k.attr("backdrop-class",b.backdropClass),b.animation&&k.attr("modal-animation","true"),q=d(k)(r),h.append(q)}var m=angular.element('<div uib-modal-window="modal-window"></div>');m.attr({"template-url":b.windowTemplateUrl,"window-class":b.windowClass,"window-top-class":b.windowTopClass,size:b.size,index:u.length()-1,animate:"animate"}).html(b.content),b.animation&&m.attr("modal-animation","true");var n=d(m)(b.scope);u.top().value.modalDomEl=n,u.top().value.modalOpener=f,h.append(n),h.addClass(g),w.clearFocusListCache()},w.close=function(a,b){var c=u.get(a);return c&&o(c,b,!0)?(c.value.modalScope.$$uibDestructionScheduled=!0,c.value.deferred.resolve(b),k(a,c.value.modalOpener),!0):!c},w.dismiss=function(a,b){var c=u.get(a);return c&&o(c,b,!1)?(c.value.modalScope.$$uibDestructionScheduled=!0,c.value.deferred.reject(b),k(a,c.value.modalOpener),!0):!c},w.dismissAll=function(a){for(var b=this.getTop();b&&this.dismiss(b.key,a);)b=this.getTop()},w.getTop=function(){return u.top()},w.modalRendered=function(a){var b=u.get(a);b&&b.value.renderDeferred.resolve()},w.focusFirstFocusableElement=function(){return s.length>0?(s[0].focus(),!0):!1},w.focusLastFocusableElement=function(){return s.length>0?(s[s.length-1].focus(),!0):!1},w.isFocusInFirstItem=function(a){return s.length>0?(a.target||a.srcElement)==s[0]:!1},w.isFocusInLastItem=function(a){return s.length>0?(a.target||a.srcElement)==s[s.length-1]:!1},w.clearFocusListCache=function(){s=[],x=0},w.loadFocusElementList=function(a){if((void 0===s||!s.length0)&&a){var b=a.value.modalDomEl;b&&b.length&&(s=b[0].querySelectorAll(y))}},w}]).provider("$uibModal",function(){var a={options:{animation:!0,backdrop:!0,keyboard:!0},$get:["$injector","$rootScope","$q","$templateRequest","$controller","$uibModalStack",function(b,c,d,e,f,g){function h(a){return a.template?d.when(a.template):e(angular.isFunction(a.templateUrl)?a.templateUrl():a.templateUrl)}function i(a){var c=[];return angular.forEach(a,function(a){angular.isFunction(a)||angular.isArray(a)?c.push(d.when(b.invoke(a))):angular.isString(a)?c.push(d.when(b.get(a))):c.push(d.when(a))}),c}var j={},k=null;return j.getPromiseChain=function(){return k},j.open=function(b){var e=d.defer(),j=d.defer(),l=d.defer(),m={result:e.promise,opened:j.promise,rendered:l.promise,close:function(a){return g.close(m,a)},dismiss:function(a){return g.dismiss(m,a)}};if(b=angular.extend({},a.options,b),b.resolve=b.resolve||{},!b.template&&!b.templateUrl)throw new Error("One of template or templateUrl options is required.");var n,o=d.all([h(b)].concat(i(b.resolve)));return n=k=d.all([k]).then(function(){return o},function(){return o}).then(function(a){var d=(b.scope||c).$new();d.$close=m.close,d.$dismiss=m.dismiss,d.$on("$destroy",function(){d.$$uibDestructionScheduled||d.$dismiss("$uibUnscheduledDestruction")});var h,i={},k=1;b.controller&&(i.$scope=d,i.$modalInstance=m,angular.forEach(b.resolve,function(b,c){i[c]=a[k++]}),h=f(b.controller,i),b.controllerAs&&(b.bindToController&&angular.extend(h,d),d[b.controllerAs]=h)),g.open(m,{scope:d,deferred:e,renderDeferred:l,content:a[0],animation:b.animation,backdrop:b.backdrop,keyboard:b.keyboard,backdropClass:b.backdropClass,windowTopClass:b.windowTopClass,windowClass:b.windowClass,windowTemplateUrl:b.windowTemplateUrl,size:b.size,openedClass:b.openedClass}),j.resolve(!0)},function(a){j.reject(a),e.reject(a)})["finally"](function(){k===n&&(k=null)}),m},j}]};return a}),angular.module("ui.bootstrap.modal").value("$modalSuppressWarning",!1).directive("modalBackdrop",["$animate","$injector","$modalStack","$log","$modalSuppressWarning",function(a,b,c,d,e){function f(b,f,h){e||d.warn("modal-backdrop is now deprecated. Use uib-modal-backdrop instead."),f.addClass("modal-backdrop"),h.modalInClass&&(g?g(f,{addClass:h.modalInClass}).start():a.addClass(f,h.modalInClass),b.$on(c.NOW_CLOSING_EVENT,function(b,c){var d=c();g?g(f,{removeClass:h.modalInClass}).start().then(d):a.removeClass(f,h.modalInClass).then(d)}))}var g=null;return b.has("$animateCss")&&(g=b.get("$animateCss")),{replace:!0,templateUrl:"template/modal/backdrop.html",compile:function(a,b){return a.addClass(b.backdropClass),f}}}]).directive("modalWindow",["$modalStack","$q","$animate","$injector","$log","$modalSuppressWarning",function(a,b,c,d,e,f){var g=null;return d.has("$animateCss")&&(g=d.get("$animateCss")),{scope:{index:"@"},replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/modal/window.html"},link:function(d,h,i){f||e.warn("modal-window is now deprecated. Use uib-modal-window instead."),h.addClass(i.windowClass||""),h.addClass(i.windowTopClass||""),d.size=i.size,d.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!==c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))},h.on("click",d.close),d.$isRendered=!0;var j=b.defer();i.$observe("modalRender",function(a){"true"==a&&j.resolve()}),j.promise.then(function(){var e=null;i.modalInClass&&(e=g?g(h,{addClass:i.modalInClass}).start():c.addClass(h,i.modalInClass),d.$on(a.NOW_CLOSING_EVENT,function(a,b){var d=b();g?g(h,{removeClass:i.modalInClass}).start().then(d):c.removeClass(h,i.modalInClass).then(d)})),b.when(e).then(function(){var a=h[0].querySelectorAll("[autofocus]");a.length?a[0].focus():h[0].focus()});var f=a.getTop();f&&a.modalRendered(f.key)})}}}]).directive("modalAnimationClass",["$log","$modalSuppressWarning",function(a,b){return{compile:function(c,d){b||a.warn("modal-animation-class is now deprecated. Use uib-modal-animation-class instead."),d.modalAnimation&&c.addClass(d.modalAnimationClass)}}}]).directive("modalTransclude",["$log","$modalSuppressWarning",function(a,b){return{link:function(c,d,e,f,g){b||a.warn("modal-transclude is now deprecated. Use uib-modal-transclude instead."),g(c.$parent,function(a){d.empty(),d.append(a)})}}}]).service("$modalStack",["$animate","$timeout","$document","$compile","$rootScope","$q","$injector","$$multiMap","$$stackedMap","$uibModalStack","$log","$modalSuppressWarning",function(a,b,c,d,e,f,g,h,i,j,k,l){l||k.warn("$modalStack is now deprecated. Use $uibModalStack instead."),angular.extend(this,j)}]).provider("$modal",["$uibModalProvider",function(a){angular.extend(this,a),this.$get=["$injector","$log","$modalSuppressWarning",function(b,c,d){return d||c.warn("$modal is now deprecated. Use $uibModal instead."),b.invoke(a.$get)}]}]),angular.module("ui.bootstrap.pagination",[]).controller("UibPaginationController",["$scope","$attrs","$parse",function(a,b,c){var d=this,e={$setViewValue:angular.noop},f=b.numPages?c(b.numPages).assign:angular.noop;this.init=function(g,h){e=g,this.config=h,e.$render=function(){d.render()},b.itemsPerPage?a.$parent.$watch(c(b.itemsPerPage),function(b){d.itemsPerPage=parseInt(b,10),a.totalPages=d.calculateTotalPages()}):this.itemsPerPage=h.itemsPerPage,a.$watch("totalItems",function(){a.totalPages=d.calculateTotalPages()}),a.$watch("totalPages",function(b){f(a.$parent,b),a.page>b?a.selectPage(b):e.$render()})},this.calculateTotalPages=function(){var b=this.itemsPerPage<1?1:Math.ceil(a.totalItems/this.itemsPerPage);return Math.max(b||0,1)},this.render=function(){a.page=parseInt(e.$viewValue,10)||1},a.selectPage=function(b,c){c&&c.preventDefault();var d=!a.ngDisabled||!c;d&&a.page!==b&&b>0&&b<=a.totalPages&&(c&&c.target&&c.target.blur(),e.$setViewValue(b),e.$render())},a.getText=function(b){return a[b+"Text"]||d.config[b+"Text"]},a.noPrevious=function(){return 1===a.page},a.noNext=function(){return a.page===a.totalPages}}]).constant("uibPaginationConfig",{itemsPerPage:10,boundaryLinks:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0}).directive("uibPagination",["$parse","uibPaginationConfig",function(a,b){return{restrict:"EA",scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@",ngDisabled:"="},require:["uibPagination","?ngModel"],controller:"UibPaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"template/pagination/pagination.html"},replace:!0,link:function(c,d,e,f){function g(a,b,c){return{number:a,text:b,active:c}}function h(a,b){var c=[],d=1,e=b,f=angular.isDefined(k)&&b>k;f&&(l?(d=Math.max(a-Math.floor(k/2),1),e=d+k-1,e>b&&(e=b,d=e-k+1)):(d=(Math.ceil(a/k)-1)*k+1,e=Math.min(d+k-1,b)));for(var h=d;e>=h;h++){var i=g(h,h,h===a);c.push(i)}if(f&&!l){if(d>1){var j=g(d-1,"...",!1);c.unshift(j)}if(b>e){var m=g(e+1,"...",!1);c.push(m)}}return c}var i=f[0],j=f[1];if(j){var k=angular.isDefined(e.maxSize)?c.$parent.$eval(e.maxSize):b.maxSize,l=angular.isDefined(e.rotate)?c.$parent.$eval(e.rotate):b.rotate;c.boundaryLinks=angular.isDefined(e.boundaryLinks)?c.$parent.$eval(e.boundaryLinks):b.boundaryLinks,c.directionLinks=angular.isDefined(e.directionLinks)?c.$parent.$eval(e.directionLinks):b.directionLinks,i.init(j,b),e.maxSize&&c.$parent.$watch(a(e.maxSize),function(a){k=parseInt(a,10),i.render()});var m=i.render;i.render=function(){m(),c.page>0&&c.page<=c.totalPages&&(c.pages=h(c.page,c.totalPages))}}}}}]).constant("uibPagerConfig",{itemsPerPage:10,previousText:"« Previous",nextText:"Next »",align:!0}).directive("uibPager",["uibPagerConfig",function(a){return{restrict:"EA",scope:{totalItems:"=",previousText:"@",nextText:"@",ngDisabled:"="},require:["uibPager","?ngModel"],controller:"UibPaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"template/pagination/pager.html"},replace:!0,link:function(b,c,d,e){var f=e[0],g=e[1];g&&(b.align=angular.isDefined(d.align)?b.$parent.$eval(d.align):a.align,f.init(g,a))}}}]),angular.module("ui.bootstrap.pagination").value("$paginationSuppressWarning",!1).controller("PaginationController",["$scope","$attrs","$parse","$controller","$element","$log","$paginationSuppressWarning",function(a,b,c,d,e,f,g){return g||f.warn("PaginationController is now deprecated. Use UibPaginationController instead."),d("UibPaginationController",{$scope:a,$element:e,$attrs:b})}]).directive("pagination",["$parse","uibPaginationConfig","$log","$paginationSuppressWarning",function(a,b,c,d){return{restrict:"EA",scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@",ngDisabled:"="},require:["pagination","?ngModel"],controller:"PaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"template/pagination/pagination.html"},replace:!0,link:function(e,f,g,h){function i(a,b,c){return{number:a,text:b,active:c}}function j(a,b){var c=[],d=1,e=b,f=angular.isDefined(m)&&b>m;f&&(n?(d=Math.max(a-Math.floor(m/2),1),e=d+m-1,e>b&&(e=b,d=e-m+1)):(d=(Math.ceil(a/m)-1)*m+1,e=Math.min(d+m-1,b)));for(var g=d;e>=g;g++){var h=i(g,g,g===a);c.push(h)}if(f&&!n){if(d>1){var j=i(d-1,"...",!1);c.unshift(j)}if(b>e){var k=i(e+1,"...",!1);c.push(k)}}return c}d||c.warn("pagination is now deprecated. Use uib-pagination instead.");var k=h[0],l=h[1];if(l){var m=angular.isDefined(g.maxSize)?e.$parent.$eval(g.maxSize):b.maxSize,n=angular.isDefined(g.rotate)?e.$parent.$eval(g.rotate):b.rotate;e.boundaryLinks=angular.isDefined(g.boundaryLinks)?e.$parent.$eval(g.boundaryLinks):b.boundaryLinks,e.directionLinks=angular.isDefined(g.directionLinks)?e.$parent.$eval(g.directionLinks):b.directionLinks,k.init(l,b),g.maxSize&&e.$parent.$watch(a(g.maxSize),function(a){m=parseInt(a,10),k.render()});var o=k.render;k.render=function(){o(),e.page>0&&e.page<=e.totalPages&&(e.pages=j(e.page,e.totalPages))}}}}}]).directive("pager",["uibPagerConfig","$log","$paginationSuppressWarning",function(a,b,c){return{restrict:"EA",scope:{totalItems:"=",previousText:"@",nextText:"@",ngDisabled:"="},require:["pager","?ngModel"],controller:"PaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"template/pagination/pager.html"},replace:!0,link:function(d,e,f,g){c||b.warn("pager is now deprecated. Use uib-pager instead.");var h=g[0],i=g[1];i&&(d.align=angular.isDefined(f.align)?d.$parent.$eval(f.align):a.align,h.init(i,a));
}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.stackedMap"]).provider("$uibTooltip",function(){function a(a){var b=/[A-Z]/g,c="-";return a.replace(b,function(a,b){return(b?c:"")+a.toLowerCase()})}var b={placement:"top",animation:!0,popupDelay:0,popupCloseDelay:500,useContentExp:!1},c={mouseenter:"mouseleave",click:"click",focus:"blur",none:""},d={};this.options=function(a){angular.extend(d,a)},this.setTriggers=function(a){angular.extend(c,a)},this.$get=["$window","$compile","$timeout","$document","$uibPosition","$interpolate","$rootScope","$parse","$$stackedMap",function(e,f,g,h,i,j,k,l,m){var n=m.createNew();return h.on("keypress",function(a){if(27===a.which){var b=n.top();b&&(b.value.close(),n.removeTop(),b=null)}}),function(e,k,m,o){function p(a){var b=(a||o.trigger||m).split(" "),d=b.map(function(a){return c[a]||a});return{show:b,hide:d}}o=angular.extend({},b,d,o);var q=a(e),r=j.startSymbol(),s=j.endSymbol(),t="<div "+q+'-popup title="'+r+"title"+s+'" '+(o.useContentExp?'content-exp="contentExp()" ':'content="'+r+"content"+s+'" ')+'placement="'+r+"placement"+s+'" popup-class="'+r+"popupClass"+s+'" animation="animation" is-open="isOpen"origin-scope="origScope" style="visibility: hidden; display: block;"></div>';return{compile:function(a,b){var c=f(t);return function(a,b,d,f){function j(){H.isOpen?q():m()}function m(){(!G||a.$eval(d[k+"Enable"]))&&(v(),H.popupDelay?C||(C=g(r,H.popupDelay,!1)):r())}function q(){s()}function r(){return C&&(g.cancel(C),C=null),B&&(g.cancel(B),B=null),H.content?(t(),void H.$evalAsync(function(){H.isOpen=!0,J&&angular.isFunction(J.assign)&&J.assign(H.origScope,H.isOpen),M()})):angular.noop}function s(){H&&(H.$evalAsync(function(){H.isOpen=!1,J&&angular.isFunction(J.assign)&&J.assign(H.origScope,H.isOpen)}),g.cancel(C),C=null,g.cancel(D),D=null,H.animation?B||(B=g(u,H.popupCloseDelay)):u())}function t(){z||(A=H.$new(),z=c(A,function(a){E?h.find("body").append(a):b.after(a)}),w())}function u(){x(),B=null,z&&(z.remove(),z=null),A&&(A.$destroy(),A=null)}function v(){H.title=d[k+"Title"],K?H.content=K(a):H.content=d[e],H.popupClass=d[k+"Class"],H.placement=angular.isDefined(d[k+"Placement"])?d[k+"Placement"]:o.placement;var b=parseInt(d[k+"PopupDelay"],10),c=parseInt(d[k+"PopupCloseDelay"],10);H.popupDelay=isNaN(b)?o.popupDelay:b,H.popupCloseDelay=isNaN(c)?o.popupCloseDelay:c}function w(){L.length=0,K?(L.push(a.$watch(K,function(a){H.content=a,!a&&H.isOpen&&s()})),L.push(A.$watch(function(){I||(I=!0,A.$$postDigest(function(){I=!1,H&&H.isOpen&&M()}))}))):L.push(d.$observe(e,function(a){H.content=a,!a&&H.isOpen?s():M()})),L.push(d.$observe(k+"Title",function(a){H.title=a,H.isOpen&&M()})),L.push(d.$observe(k+"Placement",function(a){H.placement=a?a:o.placement,H.isOpen&&M()}))}function x(){L.length&&(angular.forEach(L,function(a){a()}),L.length=0)}function y(){var a=d[k+"Trigger"];N(),F=p(a),"none"!==F.show&&F.show.forEach(function(a,c){a===F.hide[c]?b[0].addEventListener(a,j):a&&(b[0].addEventListener(a,m),F.hide[c].split(" ").forEach(function(a){b[0].addEventListener(a,q)})),b.on("keypress",function(a){27===a.which&&q()})})}var z,A,B,C,D,E=angular.isDefined(o.appendToBody)?o.appendToBody:!1,F=p(void 0),G=angular.isDefined(d[k+"Enable"]),H=a.$new(!0),I=!1,J=angular.isDefined(d[k+"IsOpen"])?l(d[k+"IsOpen"]):!1,K=o.useContentExp?l(d[e]):!1,L=[],M=function(){z&&z.html()&&(D||(D=g(function(){z.css({top:0,left:0});var a=i.positionElements(b,z,H.placement,E);a.top+="px",a.left+="px",a.visibility="visible",z.css(a),D=null},0,!1)))};H.origScope=a,H.isOpen=!1,n.add(H,{close:s}),H.contentExp=function(){return H.content},d.$observe("disabled",function(a){C&&a&&(g.cancel(C),C=null),a&&H.isOpen&&s()}),J&&a.$watch(J,function(a){!a===H.isOpen&&j()});var N=function(){F.show.forEach(function(a){b.unbind(a,m)}),F.hide.forEach(function(a){a.split(" ").forEach(function(a){b[0].removeEventListener(a,q)})})};y();var O=a.$eval(d[k+"Animation"]);H.animation=angular.isDefined(O)?!!O:o.animation;var P=a.$eval(d[k+"AppendToBody"]);E=angular.isDefined(P)?P:E,E&&a.$on("$locationChangeSuccess",function(){H.isOpen&&s()}),a.$on("$destroy",function(){g.cancel(B),g.cancel(C),g.cancel(D),N(),u(),H=null})}}}}}]}).directive("uibTooltipTemplateTransclude",["$animate","$sce","$compile","$templateRequest",function(a,b,c,d){return{link:function(e,f,g){var h,i,j,k=e.$eval(g.tooltipTemplateTranscludeScope),l=0,m=function(){i&&(i.remove(),i=null),h&&(h.$destroy(),h=null),j&&(a.leave(j).then(function(){i=null}),i=j,j=null)};e.$watch(b.parseAsResourceUrl(g.uibTooltipTemplateTransclude),function(b){var g=++l;b?(d(b,!0).then(function(d){if(g===l){var e=k.$new(),i=d,n=c(i)(e,function(b){m(),a.enter(b,f)});h=e,j=n,h.$emit("$includeContentLoaded",b)}},function(){g===l&&(m(),e.$emit("$includeContentError",b))}),e.$emit("$includeContentRequested",b)):m()}),e.$on("$destroy",m)}}}]).directive("uibTooltipClasses",function(){return{restrict:"A",link:function(a,b,c){a.placement&&b.addClass(a.placement),a.popupClass&&b.addClass(a.popupClass),a.animation()&&b.addClass(c.tooltipAnimationClass)}}}).directive("uibTooltipPopup",function(){return{replace:!0,scope:{content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html",link:function(a,b){b.addClass("tooltip")}}}).directive("uibTooltip",["$uibTooltip",function(a){return a("uibTooltip","tooltip","mouseenter")}]).directive("uibTooltipTemplatePopup",function(){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/tooltip/tooltip-template-popup.html",link:function(a,b){b.addClass("tooltip")}}}).directive("uibTooltipTemplate",["$uibTooltip",function(a){return a("uibTooltipTemplate","tooltip","mouseenter",{useContentExp:!0})}]).directive("uibTooltipHtmlPopup",function(){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-popup.html",link:function(a,b){b.addClass("tooltip")}}}).directive("uibTooltipHtml",["$uibTooltip",function(a){return a("uibTooltipHtml","tooltip","mouseenter",{useContentExp:!0})}]),angular.module("ui.bootstrap.tooltip").value("$tooltipSuppressWarning",!1).provider("$tooltip",["$uibTooltipProvider",function(a){angular.extend(this,a),this.$get=["$log","$tooltipSuppressWarning","$injector",function(b,c,d){return c||b.warn("$tooltip is now deprecated. Use $uibTooltip instead."),d.invoke(a.$get)}]}]).directive("tooltipTemplateTransclude",["$animate","$sce","$compile","$templateRequest","$log","$tooltipSuppressWarning",function(a,b,c,d,e,f){return{link:function(g,h,i){f||e.warn("tooltip-template-transclude is now deprecated. Use uib-tooltip-template-transclude instead.");var j,k,l,m=g.$eval(i.tooltipTemplateTranscludeScope),n=0,o=function(){k&&(k.remove(),k=null),j&&(j.$destroy(),j=null),l&&(a.leave(l).then(function(){k=null}),k=l,l=null)};g.$watch(b.parseAsResourceUrl(i.tooltipTemplateTransclude),function(b){var e=++n;b?(d(b,!0).then(function(d){if(e===n){var f=m.$new(),g=d,i=c(g)(f,function(b){o(),a.enter(b,h)});j=f,l=i,j.$emit("$includeContentLoaded",b)}},function(){e===n&&(o(),g.$emit("$includeContentError",b))}),g.$emit("$includeContentRequested",b)):o()}),g.$on("$destroy",o)}}}]).directive("tooltipClasses",["$log","$tooltipSuppressWarning",function(a,b){return{restrict:"A",link:function(c,d,e){b||a.warn("tooltip-classes is now deprecated. Use uib-tooltip-classes instead."),c.placement&&d.addClass(c.placement),c.popupClass&&d.addClass(c.popupClass),c.animation()&&d.addClass(e.tooltipAnimationClass)}}}]).directive("tooltipPopup",["$log","$tooltipSuppressWarning",function(a,b){return{replace:!0,scope:{content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html",link:function(c,d){b||a.warn("tooltip-popup is now deprecated. Use uib-tooltip-popup instead."),d.addClass("tooltip")}}}]).directive("tooltip",["$tooltip",function(a){return a("tooltip","tooltip","mouseenter")}]).directive("tooltipTemplatePopup",["$log","$tooltipSuppressWarning",function(a,b){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/tooltip/tooltip-template-popup.html",link:function(c,d){b||a.warn("tooltip-template-popup is now deprecated. Use uib-tooltip-template-popup instead."),d.addClass("tooltip")}}}]).directive("tooltipTemplate",["$tooltip",function(a){return a("tooltipTemplate","tooltip","mouseenter",{useContentExp:!0})}]).directive("tooltipHtmlPopup",["$log","$tooltipSuppressWarning",function(a,b){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-popup.html",link:function(c,d){b||a.warn("tooltip-html-popup is now deprecated. Use uib-tooltip-html-popup instead."),d.addClass("tooltip")}}}]).directive("tooltipHtml",["$tooltip",function(a){return a("tooltipHtml","tooltip","mouseenter",{useContentExp:!0})}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("uibPopoverTemplatePopup",function(){return{replace:!0,scope:{title:"@",contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/popover/popover-template.html",link:function(a,b){b.addClass("popover")}}}).directive("uibPopoverTemplate",["$uibTooltip",function(a){return a("uibPopoverTemplate","popover","click",{useContentExp:!0})}]).directive("uibPopoverHtmlPopup",function(){return{replace:!0,scope:{contentExp:"&",title:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover-html.html",link:function(a,b){b.addClass("popover")}}}).directive("uibPopoverHtml",["$uibTooltip",function(a){return a("uibPopoverHtml","popover","click",{useContentExp:!0})}]).directive("uibPopoverPopup",function(){return{replace:!0,scope:{title:"@",content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html",link:function(a,b){b.addClass("popover")}}}).directive("uibPopover",["$uibTooltip",function(a){return a("uibPopover","popover","click")}]),angular.module("ui.bootstrap.popover").value("$popoverSuppressWarning",!1).directive("popoverTemplatePopup",["$log","$popoverSuppressWarning",function(a,b){return{replace:!0,scope:{title:"@",contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/popover/popover-template.html",link:function(c,d){b||a.warn("popover-template-popup is now deprecated. Use uib-popover-template-popup instead."),d.addClass("popover")}}}]).directive("popoverTemplate",["$tooltip",function(a){return a("popoverTemplate","popover","click",{useContentExp:!0})}]).directive("popoverHtmlPopup",["$log","$popoverSuppressWarning",function(a,b){return{replace:!0,scope:{contentExp:"&",title:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover-html.html",link:function(c,d){b||a.warn("popover-html-popup is now deprecated. Use uib-popover-html-popup instead."),d.addClass("popover")}}}]).directive("popoverHtml",["$tooltip",function(a){return a("popoverHtml","popover","click",{useContentExp:!0})}]).directive("popoverPopup",["$log","$popoverSuppressWarning",function(a,b){return{replace:!0,scope:{title:"@",content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html",link:function(c,d){b||a.warn("popover-popup is now deprecated. Use uib-popover-popup instead."),d.addClass("popover")}}}]).directive("popover",["$tooltip",function(a){return a("popover","popover","click")}]),angular.module("ui.bootstrap.progressbar",[]).constant("uibProgressConfig",{animate:!0,max:100}).controller("UibProgressController",["$scope","$attrs","uibProgressConfig",function(a,b,c){var d=this,e=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=angular.isDefined(a.max)?a.max:c.max,this.addBar=function(b,c,f){e||c.css({transition:"none"}),this.bars.push(b),b.max=a.max,b.title=f&&angular.isDefined(f.title)?f.title:"progressbar",b.$watch("value",function(a){b.recalculatePercentage()}),b.recalculatePercentage=function(){b.percent=+(100*b.value/b.max).toFixed(2);var a=d.bars.reduce(function(a,b){return a+b.percent},0);a>100&&(b.percent-=a-100)},b.$on("$destroy",function(){c=null,d.removeBar(b)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1)},a.$watch("max",function(b){d.bars.forEach(function(b){b.max=a.max,b.recalculatePercentage()})})}]).directive("uibProgress",function(){return{replace:!0,transclude:!0,controller:"UibProgressController",require:"uibProgress",scope:{max:"=?"},templateUrl:"template/progressbar/progress.html"}}).directive("uibBar",function(){return{replace:!0,transclude:!0,require:"^uibProgress",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/bar.html",link:function(a,b,c,d){d.addBar(a,b,c)}}}).directive("uibProgressbar",function(){return{replace:!0,transclude:!0,controller:"UibProgressController",scope:{value:"=",max:"=?",type:"@"},templateUrl:"template/progressbar/progressbar.html",link:function(a,b,c,d){d.addBar(a,angular.element(b.children()[0]),{title:c.title})}}}),angular.module("ui.bootstrap.progressbar").value("$progressSuppressWarning",!1).controller("ProgressController",["$scope","$attrs","$controller","$log","$progressSuppressWarning",function(a,b,c,d,e){return e||d.warn("ProgressController is now deprecated. Use UibProgressController instead."),c("UibProgressController",{$scope:a,$attrs:b})}]).directive("progress",["$log","$progressSuppressWarning",function(a,b){return{replace:!0,transclude:!0,controller:"ProgressController",require:"progress",scope:{max:"=?",title:"@?"},templateUrl:"template/progressbar/progress.html",link:function(){b||a.warn("progress is now deprecated. Use uib-progress instead.")}}}]).directive("bar",["$log","$progressSuppressWarning",function(a,b){return{replace:!0,transclude:!0,require:"^progress",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/bar.html",link:function(c,d,e,f){b||a.warn("bar is now deprecated. Use uib-bar instead."),f.addBar(c,d)}}}]).directive("progressbar",["$log","$progressSuppressWarning",function(a,b){return{replace:!0,transclude:!0,controller:"ProgressController",scope:{value:"=",max:"=?",type:"@"},templateUrl:"template/progressbar/progressbar.html",link:function(c,d,e,f){b||a.warn("progressbar is now deprecated. Use uib-progressbar instead."),f.addBar(c,angular.element(d.children()[0]),{title:e.title})}}}]),angular.module("ui.bootstrap.rating",[]).constant("uibRatingConfig",{max:5,stateOn:null,stateOff:null,titles:["one","two","three","four","five"]}).controller("UibRatingController",["$scope","$attrs","uibRatingConfig",function(a,b,c){var d={$setViewValue:angular.noop};this.init=function(e){d=e,d.$render=this.render,d.$formatters.push(function(a){return angular.isNumber(a)&&a<<0!==a&&(a=Math.round(a)),a}),this.stateOn=angular.isDefined(b.stateOn)?a.$parent.$eval(b.stateOn):c.stateOn,this.stateOff=angular.isDefined(b.stateOff)?a.$parent.$eval(b.stateOff):c.stateOff;var f=angular.isDefined(b.titles)?a.$parent.$eval(b.titles):c.titles;this.titles=angular.isArray(f)&&f.length>0?f:c.titles;var g=angular.isDefined(b.ratingStates)?a.$parent.$eval(b.ratingStates):new Array(angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max);a.range=this.buildTemplateObjects(g)},this.buildTemplateObjects=function(a){for(var b=0,c=a.length;c>b;b++)a[b]=angular.extend({index:b},{stateOn:this.stateOn,stateOff:this.stateOff,title:this.getTitle(b)},a[b]);return a},this.getTitle=function(a){return a>=this.titles.length?a+1:this.titles[a]},a.rate=function(b){!a.readonly&&b>=0&&b<=a.range.length&&(d.$setViewValue(d.$viewValue===b?0:b),d.$render())},a.enter=function(b){a.readonly||(a.value=b),a.onHover({value:b})},a.reset=function(){a.value=d.$viewValue,a.onLeave()},a.onKeydown=function(b){/(37|38|39|40)/.test(b.which)&&(b.preventDefault(),b.stopPropagation(),a.rate(a.value+(38===b.which||39===b.which?1:-1)))},this.render=function(){a.value=d.$viewValue}}]).directive("uibRating",function(){return{require:["uibRating","ngModel"],scope:{readonly:"=?",onHover:"&",onLeave:"&"},controller:"UibRatingController",templateUrl:"template/rating/rating.html",replace:!0,link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}),angular.module("ui.bootstrap.rating").value("$ratingSuppressWarning",!1).controller("RatingController",["$scope","$attrs","$controller","$log","$ratingSuppressWarning",function(a,b,c,d,e){return e||d.warn("RatingController is now deprecated. Use UibRatingController instead."),c("UibRatingController",{$scope:a,$attrs:b})}]).directive("rating",["$log","$ratingSuppressWarning",function(a,b){return{require:["rating","ngModel"],scope:{readonly:"=?",onHover:"&",onLeave:"&"},controller:"RatingController",templateUrl:"template/rating/rating.html",replace:!0,link:function(c,d,e,f){b||a.warn("rating is now deprecated. Use uib-rating instead.");var g=f[0],h=f[1];g.init(h)}}}]),angular.module("ui.bootstrap.tabs",[]).controller("UibTabsetController",["$scope",function(a){var b=this,c=b.tabs=a.tabs=[];b.select=function(a){angular.forEach(c,function(b){b.active&&b!==a&&(b.active=!1,b.onDeselect(),a.selectCalled=!1)}),a.active=!0,a.selectCalled||(a.onSelect(),a.selectCalled=!0)},b.addTab=function(a){c.push(a),1===c.length&&a.active!==!1?a.active=!0:a.active?b.select(a):a.active=!1},b.removeTab=function(a){var e=c.indexOf(a);if(a.active&&c.length>1&&!d){var f=e==c.length-1?e-1:e+1;b.select(c[f])}c.splice(e,1)};var d;a.$on("$destroy",function(){d=!0})}]).directive("uibTabset",function(){return{restrict:"EA",transclude:!0,replace:!0,scope:{type:"@"},controller:"UibTabsetController",templateUrl:"template/tabs/tabset.html",link:function(a,b,c){a.vertical=angular.isDefined(c.vertical)?a.$parent.$eval(c.vertical):!1,a.justified=angular.isDefined(c.justified)?a.$parent.$eval(c.justified):!1}}}).directive("uibTab",["$parse",function(a){return{require:"^uibTabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{active:"=?",heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},link:function(b,c,d,e,f){b.$watch("active",function(a){a&&e.select(b)}),b.disabled=!1,d.disable&&b.$parent.$watch(a(d.disable),function(a){b.disabled=!!a}),b.select=function(){b.disabled||(b.active=!0)},e.addTab(b),b.$on("$destroy",function(){e.removeTab(b)}),b.$transcludeFn=f}}}]).directive("uibTabHeadingTransclude",function(){return{restrict:"A",require:["?^uibTab","?^tab"],link:function(a,b){a.$watch("headingElement",function(a){a&&(b.html(""),b.append(a))})}}}).directive("uibTabContentTransclude",function(){function a(a){return a.tagName&&(a.hasAttribute("tab-heading")||a.hasAttribute("data-tab-heading")||a.hasAttribute("x-tab-heading")||a.hasAttribute("uib-tab-heading")||a.hasAttribute("data-uib-tab-heading")||a.hasAttribute("x-uib-tab-heading")||"tab-heading"===a.tagName.toLowerCase()||"data-tab-heading"===a.tagName.toLowerCase()||"x-tab-heading"===a.tagName.toLowerCase()||"uib-tab-heading"===a.tagName.toLowerCase()||"data-uib-tab-heading"===a.tagName.toLowerCase()||"x-uib-tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:["?^uibTabset","?^tabset"],link:function(b,c,d){var e=b.$eval(d.uibTabContentTransclude);e.$transcludeFn(e.$parent,function(b){angular.forEach(b,function(b){a(b)?e.headingElement=b:c.append(b)})})}}}),angular.module("ui.bootstrap.tabs").value("$tabsSuppressWarning",!1).controller("TabsetController",["$scope","$controller","$log","$tabsSuppressWarning",function(a,b,c,d){return d||c.warn("TabsetController is now deprecated. Use UibTabsetController instead."),b("UibTabsetController",{$scope:a})}]).directive("tabset",["$log","$tabsSuppressWarning",function(a,b){return{restrict:"EA",transclude:!0,replace:!0,scope:{type:"@"},controller:"TabsetController",templateUrl:"template/tabs/tabset.html",link:function(c,d,e){b||a.warn("tabset is now deprecated. Use uib-tabset instead."),c.vertical=angular.isDefined(e.vertical)?c.$parent.$eval(e.vertical):!1,c.justified=angular.isDefined(e.justified)?c.$parent.$eval(e.justified):!1}}}]).directive("tab",["$parse","$log","$tabsSuppressWarning",function(a,b,c){return{require:"^tabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{active:"=?",heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},link:function(d,e,f,g,h){c||b.warn("tab is now deprecated. Use uib-tab instead."),d.$watch("active",function(a){a&&g.select(d)}),d.disabled=!1,f.disable&&d.$parent.$watch(a(f.disable),function(a){d.disabled=!!a}),d.select=function(){d.disabled||(d.active=!0)},g.addTab(d),d.$on("$destroy",function(){g.removeTab(d)}),d.$transcludeFn=h}}}]).directive("tabHeadingTransclude",["$log","$tabsSuppressWarning",function(a,b){return{restrict:"A",require:"^tab",link:function(c,d){b||a.warn("tab-heading-transclude is now deprecated. Use uib-tab-heading-transclude instead."),c.$watch("headingElement",function(a){a&&(d.html(""),d.append(a))})}}}]).directive("tabContentTransclude",["$log","$tabsSuppressWarning",function(a,b){function c(a){return a.tagName&&(a.hasAttribute("tab-heading")||a.hasAttribute("data-tab-heading")||a.hasAttribute("x-tab-heading")||"tab-heading"===a.tagName.toLowerCase()||"data-tab-heading"===a.tagName.toLowerCase()||"x-tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:"^tabset",link:function(d,e,f){b||a.warn("tab-content-transclude is now deprecated. Use uib-tab-content-transclude instead.");var g=d.$eval(f.tabContentTransclude);g.$transcludeFn(g.$parent,function(a){angular.forEach(a,function(a){c(a)?g.headingElement=a:e.append(a)})})}}}]),angular.module("ui.bootstrap.timepicker",[]).constant("uibTimepickerConfig",{hourStep:1,minuteStep:1,showMeridian:!0,meridians:null,readonlyInput:!1,mousewheel:!0,arrowkeys:!0,showSpinners:!0}).controller("UibTimepickerController",["$scope","$attrs","$parse","$log","$locale","uibTimepickerConfig",function(a,b,c,d,e,f){function g(){var b=parseInt(a.hours,10),c=a.showMeridian?b>0&&13>b:b>=0&&24>b;return c?(a.showMeridian&&(12===b&&(b=0),a.meridian===q[1]&&(b+=12)),b):void 0}function h(){var b=parseInt(a.minutes,10);return b>=0&&60>b?b:void 0}function i(a){return angular.isDefined(a)&&a.toString().length<2?"0"+a:a.toString()}function j(a){k(),p.$setViewValue(new Date(o)),l(a)}function k(){p.$setValidity("time",!0),a.invalidHours=!1,a.invalidMinutes=!1}function l(b){var c=o.getHours(),d=o.getMinutes();a.showMeridian&&(c=0===c||12===c?12:c%12),a.hours="h"===b?c:i(c),"m"!==b&&(a.minutes=i(d)),a.meridian=o.getHours()<12?q[0]:q[1]}function m(a,b){var c=new Date(a.getTime()+6e4*b),d=new Date(a);return d.setHours(c.getHours(),c.getMinutes()),d}function n(a){o=m(o,a),j()}var o=new Date,p={$setViewValue:angular.noop},q=angular.isDefined(b.meridians)?a.$parent.$eval(b.meridians):f.meridians||e.DATETIME_FORMATS.AMPMS;this.init=function(c,d){p=c,p.$render=this.render,p.$formatters.unshift(function(a){return a?new Date(a):null});var e=d.eq(0),g=d.eq(1),h=angular.isDefined(b.mousewheel)?a.$parent.$eval(b.mousewheel):f.mousewheel;h&&this.setupMousewheelEvents(e,g);var i=angular.isDefined(b.arrowkeys)?a.$parent.$eval(b.arrowkeys):f.arrowkeys;i&&this.setupArrowkeyEvents(e,g),a.readonlyInput=angular.isDefined(b.readonlyInput)?a.$parent.$eval(b.readonlyInput):f.readonlyInput,this.setupInputEvents(e,g)};var r=f.hourStep;b.hourStep&&a.$parent.$watch(c(b.hourStep),function(a){r=parseInt(a,10)});var s=f.minuteStep;b.minuteStep&&a.$parent.$watch(c(b.minuteStep),function(a){s=parseInt(a,10)});var t;a.$parent.$watch(c(b.min),function(a){var b=new Date(a);t=isNaN(b)?void 0:b});var u;a.$parent.$watch(c(b.max),function(a){var b=new Date(a);u=isNaN(b)?void 0:b}),a.noIncrementHours=function(){var a=m(o,60*r);return a>u||o>a&&t>a},a.noDecrementHours=function(){var a=m(o,60*-r);return t>a||a>o&&a>u},a.noIncrementMinutes=function(){var a=m(o,s);return a>u||o>a&&t>a},a.noDecrementMinutes=function(){var a=m(o,-s);return t>a||a>o&&a>u},a.noToggleMeridian=function(){return o.getHours()<13?m(o,720)>u:m(o,-720)<t},a.showMeridian=f.showMeridian,b.showMeridian&&a.$parent.$watch(c(b.showMeridian),function(b){if(a.showMeridian=!!b,p.$error.time){var c=g(),d=h();angular.isDefined(c)&&angular.isDefined(d)&&(o.setHours(c),j())}else l()}),this.setupMousewheelEvents=function(b,c){var d=function(a){a.originalEvent&&(a=a.originalEvent);var b=a.wheelDelta?a.wheelDelta:-a.deltaY;return a.detail||b>0};b.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementHours():a.decrementHours()),b.preventDefault()}),c.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementMinutes():a.decrementMinutes()),b.preventDefault()})},this.setupArrowkeyEvents=function(b,c){b.bind("keydown",function(b){38===b.which?(b.preventDefault(),a.incrementHours(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementHours(),a.$apply())}),c.bind("keydown",function(b){38===b.which?(b.preventDefault(),a.incrementMinutes(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementMinutes(),a.$apply())})},this.setupInputEvents=function(b,c){if(a.readonlyInput)return a.updateHours=angular.noop,void(a.updateMinutes=angular.noop);var d=function(b,c){p.$setViewValue(null),p.$setValidity("time",!1),angular.isDefined(b)&&(a.invalidHours=b),angular.isDefined(c)&&(a.invalidMinutes=c)};a.updateHours=function(){var a=g(),b=h();angular.isDefined(a)&&angular.isDefined(b)?(o.setHours(a),t>o||o>u?d(!0):j("h")):d(!0)},b.bind("blur",function(b){!a.invalidHours&&a.hours<10&&a.$apply(function(){a.hours=i(a.hours)})}),a.updateMinutes=function(){var a=h(),b=g();angular.isDefined(a)&&angular.isDefined(b)?(o.setMinutes(a),t>o||o>u?d(void 0,!0):j("m")):d(void 0,!0)},c.bind("blur",function(b){!a.invalidMinutes&&a.minutes<10&&a.$apply(function(){a.minutes=i(a.minutes)})})},this.render=function(){var b=p.$viewValue;isNaN(b)?(p.$setValidity("time",!1),d.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(b&&(o=b),t>o||o>u?(p.$setValidity("time",!1),a.invalidHours=!0,a.invalidMinutes=!0):k(),l())},a.showSpinners=angular.isDefined(b.showSpinners)?a.$parent.$eval(b.showSpinners):f.showSpinners,a.incrementHours=function(){a.noIncrementHours()||n(60*r)},a.decrementHours=function(){a.noDecrementHours()||n(60*-r)},a.incrementMinutes=function(){a.noIncrementMinutes()||n(s)},a.decrementMinutes=function(){a.noDecrementMinutes()||n(-s)},a.toggleMeridian=function(){a.noToggleMeridian()||n(720*(o.getHours()<12?1:-1))}}]).directive("uibTimepicker",function(){return{restrict:"EA",require:["uibTimepicker","?^ngModel"],controller:"UibTimepickerController",controllerAs:"timepicker",replace:!0,scope:{},templateUrl:function(a,b){return b.templateUrl||"template/timepicker/timepicker.html"},link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f,b.find("input"))}}}),angular.module("ui.bootstrap.timepicker").value("$timepickerSuppressWarning",!1).controller("TimepickerController",["$scope","$attrs","$controller","$log","$timepickerSuppressWarning",function(a,b,c,d,e){return e||d.warn("TimepickerController is now deprecated. Use UibTimepickerController instead."),c("UibTimepickerController",{$scope:a,$attrs:b})}]).directive("timepicker",["$log","$timepickerSuppressWarning",function(a,b){return{restrict:"EA",require:["timepicker","?^ngModel"],controller:"TimepickerController",controllerAs:"timepicker",replace:!0,scope:{},templateUrl:function(a,b){return b.templateUrl||"template/timepicker/timepicker.html"},link:function(c,d,e,f){b||a.warn("timepicker is now deprecated. Use uib-timepicker instead.");var g=f[0],h=f[1];h&&g.init(h,d.find("input"))}}}]),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.position"]).factory("uibTypeaheadParser",["$parse",function(a){var b=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;return{parse:function(c){var d=c.match(b);if(!d)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "'+c+'".');return{itemName:d[3],source:a(d[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).directive("uibTypeahead",["$compile","$parse","$q","$timeout","$document","$window","$rootScope","$uibPosition","uibTypeaheadParser",function(a,b,c,d,e,f,g,h,i){var j=[9,13,27,38,40],k=200;return{require:["ngModel","^?ngModelOptions"],link:function(l,m,n,o){function p(){L.moveInProgress||(L.moveInProgress=!0,L.$digest()),T&&d.cancel(T),T=d(function(){L.matches.length&&q(),L.moveInProgress=!1},k)}function q(){L.position=D?h.offset(m):h.position(m),L.position.top+=m.prop("offsetHeight")}var r=o[0],s=o[1],t=l.$eval(n.typeaheadMinLength);t||0===t||(t=1);var u,v,w=l.$eval(n.typeaheadWaitMs)||0,x=l.$eval(n.typeaheadEditable)!==!1,y=b(n.typeaheadLoading).assign||angular.noop,z=b(n.typeaheadOnSelect),A=angular.isDefined(n.typeaheadSelectOnBlur)?l.$eval(n.typeaheadSelectOnBlur):!1,B=b(n.typeaheadNoResults).assign||angular.noop,C=n.typeaheadInputFormatter?b(n.typeaheadInputFormatter):void 0,D=n.typeaheadAppendToBody?l.$eval(n.typeaheadAppendToBody):!1,E=n.typeaheadAppendToElementId||!1,F=l.$eval(n.typeaheadFocusFirst)!==!1,G=n.typeaheadSelectOnExact?l.$eval(n.typeaheadSelectOnExact):!1,H=b(n.ngModel),I=b(n.ngModel+"($$$p)"),J=function(a,b){return angular.isFunction(H(l))&&s&&s.$options&&s.$options.getterSetter?I(a,{$$$p:b}):H.assign(a,b)},K=i.parse(n.uibTypeahead),L=l.$new(),M=l.$on("$destroy",function(){L.$destroy()});L.$on("$destroy",M);var N="typeahead-"+L.$id+"-"+Math.floor(1e4*Math.random());m.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":N});var O=angular.element("<div uib-typeahead-popup></div>");O.attr({id:N,matches:"matches",active:"activeIdx",select:"select(activeIdx)","move-in-progress":"moveInProgress",query:"query",position:"position"}),angular.isDefined(n.typeaheadTemplateUrl)&&O.attr("template-url",n.typeaheadTemplateUrl),angular.isDefined(n.typeaheadPopupTemplateUrl)&&O.attr("popup-template-url",n.typeaheadPopupTemplateUrl);var P=function(){L.matches=[],L.activeIdx=-1,m.attr("aria-expanded",!1)},Q=function(a){return N+"-option-"+a};L.$watch("activeIdx",function(a){0>a?m.removeAttr("aria-activedescendant"):m.attr("aria-activedescendant",Q(a))});var R=function(a,b){return L.matches.length>b&&a?a.toUpperCase()===L.matches[b].label.toUpperCase():!1},S=function(a){var b={$viewValue:a};y(l,!0),B(l,!1),c.when(K.source(l,b)).then(function(c){var d=a===r.$viewValue;if(d&&u)if(c&&c.length>0){L.activeIdx=F?0:-1,B(l,!1),L.matches.length=0;for(var e=0;e<c.length;e++)b[K.itemName]=c[e],L.matches.push({id:Q(e),label:K.viewMapper(L,b),model:c[e]});L.query=a,q(),m.attr("aria-expanded",!0),G&&1===L.matches.length&&R(a,0)&&L.select(0)}else P(),B(l,!0);d&&y(l,!1)},function(){P(),y(l,!1),B(l,!0)})};D&&(angular.element(f).bind("resize",p),e.find("body").bind("scroll",p));var T;L.moveInProgress=!1,P(),L.query=void 0;var U,V=function(a){U=d(function(){S(a)},w)},W=function(){U&&d.cancel(U)};r.$parsers.unshift(function(a){return u=!0,0===t||a&&a.length>=t?w>0?(W(),V(a)):S(a):(y(l,!1),W(),P()),x?a:a?void r.$setValidity("editable",!1):(r.$setValidity("editable",!0),null)}),r.$formatters.push(function(a){var b,c,d={};return x||r.$setValidity("editable",!0),C?(d.$model=a,C(l,d)):(d[K.itemName]=a,b=K.viewMapper(l,d),d[K.itemName]=void 0,c=K.viewMapper(l,d),b!==c?b:a)}),L.select=function(a){var b,c,e={};v=!0,e[K.itemName]=c=L.matches[a].model,b=K.modelMapper(l,e),J(l,b),r.$setValidity("editable",!0),r.$setValidity("parse",!0),z(l,{$item:c,$model:b,$label:K.viewMapper(l,e)}),P(),L.$eval(n.typeaheadFocusOnSelect)!==!1&&d(function(){m[0].focus()},0,!1)},m.bind("keydown",function(a){if(0!==L.matches.length&&-1!==j.indexOf(a.which)){if(-1===L.activeIdx&&(9===a.which||13===a.which))return P(),void L.$digest();a.preventDefault(),
40===a.which?(L.activeIdx=(L.activeIdx+1)%L.matches.length,L.$digest()):38===a.which?(L.activeIdx=(L.activeIdx>0?L.activeIdx:L.matches.length)-1,L.$digest()):13===a.which||9===a.which?L.$apply(function(){L.select(L.activeIdx)}):27===a.which&&(a.stopPropagation(),P(),L.$digest())}}),m.bind("blur",function(){A&&L.matches.length&&-1!==L.activeIdx&&!v&&(v=!0,L.$apply(function(){L.select(L.activeIdx)})),u=!1,v=!1});var X=function(a){m[0]!==a.target&&3!==a.which&&0!==L.matches.length&&(P(),g.$$phase||L.$digest())};e.bind("click",X),l.$on("$destroy",function(){e.unbind("click",X),(D||E)&&Y.remove(),O.remove()});var Y=a(O)(L);D?e.find("body").append(Y):E!==!1?angular.element(e[0].getElementById(E)).append(Y):m.after(Y)}}}]).directive("uibTypeaheadPopup",function(){return{scope:{matches:"=",query:"=",active:"=",position:"&",moveInProgress:"=",select:"&"},replace:!0,templateUrl:function(a,b){return b.popupTemplateUrl||"template/typeahead/typeahead-popup.html"},link:function(a,b,c){a.templateUrl=c.templateUrl,a.isOpen=function(){return a.matches.length>0},a.isActive=function(b){return a.active==b},a.selectActive=function(b){a.active=b},a.selectMatch=function(b){a.select({activeIdx:b})}}}}).directive("uibTypeaheadMatch",["$templateRequest","$compile","$parse",function(a,b,c){return{scope:{index:"=",match:"=",query:"="},link:function(d,e,f){var g=c(f.templateUrl)(d.$parent)||"template/typeahead/typeahead-match.html";a(g).then(function(a){b(a.trim())(d,function(a){e.replaceWith(a)})})}}}]).filter("uibTypeaheadHighlight",["$sce","$injector","$log",function(a,b,c){function d(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}function e(a){return/<.*>/g.test(a)}var f;return f=b.has("$sanitize"),function(b,g){return!f&&e(b)&&c.warn("Unsafe use of typeahead please use ngSanitize"),b=g?(""+b).replace(new RegExp(d(g),"gi"),"<strong>$&</strong>"):b,f||(b=a.trustAsHtml(b)),b}}]),angular.module("ui.bootstrap.typeahead").value("$typeaheadSuppressWarning",!1).service("typeaheadParser",["$parse","uibTypeaheadParser","$log","$typeaheadSuppressWarning",function(a,b,c,d){return d||c.warn("typeaheadParser is now deprecated. Use uibTypeaheadParser instead."),b}]).directive("typeahead",["$compile","$parse","$q","$timeout","$document","$window","$rootScope","$uibPosition","typeaheadParser","$log","$typeaheadSuppressWarning",function(a,b,c,d,e,f,g,h,i,j,k){var l=[9,13,27,38,40],m=200;return{require:["ngModel","^?ngModelOptions"],link:function(n,o,p,q){function r(){N.moveInProgress||(N.moveInProgress=!0,N.$digest()),V&&d.cancel(V),V=d(function(){N.matches.length&&s(),N.moveInProgress=!1},m)}function s(){N.position=F?h.offset(o):h.position(o),N.position.top+=o.prop("offsetHeight")}k||j.warn("typeahead is now deprecated. Use uib-typeahead instead.");var t=q[0],u=q[1],v=n.$eval(p.typeaheadMinLength);v||0===v||(v=1);var w,x,y=n.$eval(p.typeaheadWaitMs)||0,z=n.$eval(p.typeaheadEditable)!==!1,A=b(p.typeaheadLoading).assign||angular.noop,B=b(p.typeaheadOnSelect),C=angular.isDefined(p.typeaheadSelectOnBlur)?n.$eval(p.typeaheadSelectOnBlur):!1,D=b(p.typeaheadNoResults).assign||angular.noop,E=p.typeaheadInputFormatter?b(p.typeaheadInputFormatter):void 0,F=p.typeaheadAppendToBody?n.$eval(p.typeaheadAppendToBody):!1,G=p.typeaheadAppendToElementId||!1,H=n.$eval(p.typeaheadFocusFirst)!==!1,I=p.typeaheadSelectOnExact?n.$eval(p.typeaheadSelectOnExact):!1,J=b(p.ngModel),K=b(p.ngModel+"($$$p)"),L=function(a,b){return angular.isFunction(J(n))&&u&&u.$options&&u.$options.getterSetter?K(a,{$$$p:b}):J.assign(a,b)},M=i.parse(p.typeahead),N=n.$new(),O=n.$on("$destroy",function(){N.$destroy()});N.$on("$destroy",O);var P="typeahead-"+N.$id+"-"+Math.floor(1e4*Math.random());o.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":P});var Q=angular.element("<div typeahead-popup></div>");Q.attr({id:P,matches:"matches",active:"activeIdx",select:"select(activeIdx)","move-in-progress":"moveInProgress",query:"query",position:"position"}),angular.isDefined(p.typeaheadTemplateUrl)&&Q.attr("template-url",p.typeaheadTemplateUrl),angular.isDefined(p.typeaheadPopupTemplateUrl)&&Q.attr("popup-template-url",p.typeaheadPopupTemplateUrl);var R=function(){N.matches=[],N.activeIdx=-1,o.attr("aria-expanded",!1)},S=function(a){return P+"-option-"+a};N.$watch("activeIdx",function(a){0>a?o.removeAttr("aria-activedescendant"):o.attr("aria-activedescendant",S(a))});var T=function(a,b){return N.matches.length>b&&a?a.toUpperCase()===N.matches[b].label.toUpperCase():!1},U=function(a){var b={$viewValue:a};A(n,!0),D(n,!1),c.when(M.source(n,b)).then(function(c){var d=a===t.$viewValue;if(d&&w)if(c&&c.length>0){N.activeIdx=H?0:-1,D(n,!1),N.matches.length=0;for(var e=0;e<c.length;e++)b[M.itemName]=c[e],N.matches.push({id:S(e),label:M.viewMapper(N,b),model:c[e]});N.query=a,s(),o.attr("aria-expanded",!0),I&&1===N.matches.length&&T(a,0)&&N.select(0)}else R(),D(n,!0);d&&A(n,!1)},function(){R(),A(n,!1),D(n,!0)})};F&&(angular.element(f).bind("resize",r),e.find("body").bind("scroll",r));var V;N.moveInProgress=!1,R(),N.query=void 0;var W,X=function(a){W=d(function(){U(a)},y)},Y=function(){W&&d.cancel(W)};t.$parsers.unshift(function(a){return w=!0,0===v||a&&a.length>=v?y>0?(Y(),X(a)):U(a):(A(n,!1),Y(),R()),z?a:a?void t.$setValidity("editable",!1):(t.$setValidity("editable",!0),null)}),t.$formatters.push(function(a){var b,c,d={};return z||t.$setValidity("editable",!0),E?(d.$model=a,E(n,d)):(d[M.itemName]=a,b=M.viewMapper(n,d),d[M.itemName]=void 0,c=M.viewMapper(n,d),b!==c?b:a)}),N.select=function(a){var b,c,e={};x=!0,e[M.itemName]=c=N.matches[a].model,b=M.modelMapper(n,e),L(n,b),t.$setValidity("editable",!0),t.$setValidity("parse",!0),B(n,{$item:c,$model:b,$label:M.viewMapper(n,e)}),R(),N.$eval(p.typeaheadFocusOnSelect)!==!1&&d(function(){o[0].focus()},0,!1)},o.bind("keydown",function(a){if(0!==N.matches.length&&-1!==l.indexOf(a.which)){if(-1===N.activeIdx&&(9===a.which||13===a.which))return R(),void N.$digest();a.preventDefault(),40===a.which?(N.activeIdx=(N.activeIdx+1)%N.matches.length,N.$digest()):38===a.which?(N.activeIdx=(N.activeIdx>0?N.activeIdx:N.matches.length)-1,N.$digest()):13===a.which||9===a.which?N.$apply(function(){N.select(N.activeIdx)}):27===a.which&&(a.stopPropagation(),R(),N.$digest())}}),o.bind("blur",function(){C&&N.matches.length&&-1!==N.activeIdx&&!x&&(x=!0,N.$apply(function(){N.select(N.activeIdx)})),w=!1,x=!1});var Z=function(a){o[0]!==a.target&&3!==a.which&&0!==N.matches.length&&(R(),g.$$phase||N.$digest())};e.bind("click",Z),n.$on("$destroy",function(){e.unbind("click",Z),(F||G)&&$.remove(),Q.remove()});var $=a(Q)(N);F?e.find("body").append($):G!==!1?angular.element(e[0].getElementById(G)).append($):o.after($)}}}]).directive("typeaheadPopup",["$typeaheadSuppressWarning","$log",function(a,b){return{scope:{matches:"=",query:"=",active:"=",position:"&",moveInProgress:"=",select:"&"},replace:!0,templateUrl:function(a,b){return b.popupTemplateUrl||"template/typeahead/typeahead-popup.html"},link:function(c,d,e){a||b.warn("typeahead-popup is now deprecated. Use uib-typeahead-popup instead."),c.templateUrl=e.templateUrl,c.isOpen=function(){return c.matches.length>0},c.isActive=function(a){return c.active==a},c.selectActive=function(a){c.active=a},c.selectMatch=function(a){c.select({activeIdx:a})}}}}]).directive("typeaheadMatch",["$templateRequest","$compile","$parse","$typeaheadSuppressWarning","$log",function(a,b,c,d,e){return{restrict:"EA",scope:{index:"=",match:"=",query:"="},link:function(f,g,h){d||e.warn("typeahead-match is now deprecated. Use uib-typeahead-match instead.");var i=c(h.templateUrl)(f.$parent)||"template/typeahead/typeahead-match.html";a(i).then(function(a){b(a.trim())(f,function(a){g.replaceWith(a)})})}}}]).filter("typeaheadHighlight",["$sce","$injector","$log","$typeaheadSuppressWarning",function(a,b,c,d){function e(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}function f(a){return/<.*>/g.test(a)}var g;return g=b.has("$sanitize"),function(b,h){return d||c.warn("typeaheadHighlight is now deprecated. Use uibTypeaheadHighlight instead."),!g&&f(b)&&c.warn("Unsafe use of typeahead please use ngSanitize"),b=h?(""+b).replace(new RegExp(e(h),"gi"),"<strong>$&</strong>"):b,g||(b=a.trustAsHtml(b)),b}}]),angular.module("template/accordion/accordion-group.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion-group.html",'<div class="panel {{panelClass || \'panel-default\'}}">\n  <div class="panel-heading" ng-keypress="toggleOpen($event)">\n    <h4 class="panel-title">\n      <a href tabindex="0" class="accordion-toggle" ng-click="toggleOpen()" uib-accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse collapse" uib-collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n')}]),angular.module("template/accordion/accordion.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion.html",'<div class="panel-group" ng-transclude></div>')}]),angular.module("template/alert/alert.html",[]).run(["$templateCache",function(a){a.put("template/alert/alert.html",'<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissible\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close({$event: $event})">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')}]),angular.module("template/carousel/carousel.html",[]).run(["$templateCache",function(a){a.put("template/carousel/carousel.html",'<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n  <div class="carousel-inner" ng-transclude></div>\n  <a role="button" href class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1">\n    <span aria-hidden="true" class="glyphicon glyphicon-chevron-left"></span>\n    <span class="sr-only">previous</span>\n  </a>\n  <a role="button" href class="right carousel-control" ng-click="next()" ng-show="slides.length > 1">\n    <span aria-hidden="true" class="glyphicon glyphicon-chevron-right"></span>\n    <span class="sr-only">next</span>\n  </a>\n  <ol class="carousel-indicators" ng-show="slides.length > 1">\n    <li ng-repeat="slide in slides | orderBy:indexOfSlide track by $index" ng-class="{ active: isActive(slide) }" ng-click="select(slide)">\n      <span class="sr-only">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if="isActive(slide)">, currently active</span></span>\n    </li>\n  </ol>\n</div>')}]),angular.module("template/carousel/slide.html",[]).run(["$templateCache",function(a){a.put("template/carousel/slide.html",'<div ng-class="{\n    \'active\': active\n  }" class="item text-center" ng-transclude></div>\n')}]),angular.module("template/datepicker/datepicker.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/datepicker.html",'<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <uib-daypicker ng-switch-when="day" tabindex="0"></uib-daypicker>\n  <uib-monthpicker ng-switch-when="month" tabindex="0"></uib-monthpicker>\n  <uib-yearpicker ng-switch-when="year" tabindex="0"></uib-yearpicker>\n</div>')}]),angular.module("template/datepicker/day.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/day.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{::5 + showWeeks}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-if="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in ::labels track by $index" class="text-center"><small aria-label="{{::label.full}}">{{::label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-if="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/month.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/month.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/popup.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/popup.html",'<ul class="dropdown-menu" dropdown-nested ng-if="isOpen" style="display: block" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)" ng-click="$event.stopPropagation()">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group pull-left">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')" ng-disabled="isDisabled(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')}]),angular.module("template/datepicker/year.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/year.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/modal/backdrop.html",[]).run(["$templateCache",function(a){a.put("template/modal/backdrop.html",'<div uib-modal-animation-class="fade"\n     modal-in-class="in"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')}]),angular.module("template/modal/window.html",[]).run(["$templateCache",function(a){a.put("template/modal/window.html",'<div modal-render="{{$isRendered}}" tabindex="-1" role="dialog" class="modal"\n    uib-modal-animation-class="fade"\n    modal-in-class="in"\n    ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}">\n    <div class="modal-dialog" ng-class="size ? \'modal-\' + size : \'\'"><div class="modal-content" uib-modal-transclude></div></div>\n</div>\n')}]),angular.module("template/pagination/pager.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pager.html",'<ul class="pager">\n  <li ng-class="{disabled: noPrevious()||ngDisabled, previous: align}"><a href ng-click="selectPage(page - 1, $event)">{{::getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext()||ngDisabled, next: align}"><a href ng-click="selectPage(page + 1, $event)">{{::getText(\'next\')}}</a></li>\n</ul>\n')}]),angular.module("template/pagination/pagination.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pagination.html",'<ul class="pagination">\n  <li ng-if="::boundaryLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-first"><a href ng-click="selectPage(1, $event)">{{::getText(\'first\')}}</a></li>\n  <li ng-if="::directionLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-prev"><a href ng-click="selectPage(page - 1, $event)">{{::getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active,disabled: ngDisabled&&!page.active}" class="pagination-page"><a href ng-click="selectPage(page.number, $event)">{{page.text}}</a></li>\n  <li ng-if="::directionLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-next"><a href ng-click="selectPage(page + 1, $event)">{{::getText(\'next\')}}</a></li>\n  <li ng-if="::boundaryLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-last"><a href ng-click="selectPage(totalPages, $event)">{{::getText(\'last\')}}</a></li>\n</ul>\n')}]),angular.module("template/tooltip/tooltip-html-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-html-popup.html",'<div\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind-html="contentExp()"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-html-unsafe-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-html-unsafe-popup.html",'<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-popup.html",'<div\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-template-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-template-popup.html",'<div\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner"\n    uib-tooltip-template-transclude="contentExp()"\n    tooltip-template-transclude-scope="originScope()"></div>\n</div>\n')}]),angular.module("template/popover/popover-html.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover-html.html",'<div tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content" ng-bind-html="contentExp()"></div>\n  </div>\n</div>\n')}]),angular.module("template/popover/popover-template.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover-template.html",'<div tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content"\n        uib-tooltip-template-transclude="contentExp()"\n        tooltip-template-transclude-scope="originScope()"></div>\n  </div>\n</div>\n')}]),angular.module("template/popover/popover.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover.html",'<div tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')}]),angular.module("template/progressbar/bar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/bar.html",'<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" style="min-width: 0;" ng-transclude></div>\n')}]),angular.module("template/progressbar/progress.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progress.html",'<div class="progress" ng-transclude aria-labelledby="{{::title}}"></div>')}]),angular.module("template/progressbar/progressbar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progressbar.html",'<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" style="min-width: 0;" ng-transclude></div>\n</div>\n')}]),angular.module("template/rating/rating.html",[]).run(["$templateCache",function(a){a.put("template/rating/rating.html",'<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <span ng-repeat-start="r in range track by $index" class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    <i ng-repeat-end ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')" ng-attr-title="{{r.title}}" aria-valuetext="{{r.title}}"></i>\n</span>\n')}]),angular.module("template/tabs/tab.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tab.html",'<li ng-class="{active: active, disabled: disabled}">\n  <a href ng-click="select()" uib-tab-heading-transclude>{{heading}}</a>\n</li>\n')}]),angular.module("template/tabs/tabset.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tabset.html",'<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         uib-tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')}]),angular.module("template/timepicker/timepicker.html",[]).run(["$templateCache",function(a){a.put("template/timepicker/timepicker.html",'<table>\n  <tbody>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td><a ng-click="incrementHours()" ng-class="{disabled: noIncrementHours()}" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td>&nbsp;</td>\n      <td><a ng-click="incrementMinutes()" ng-class="{disabled: noIncrementMinutes()}" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n    <tr>\n      <td class="form-group" ng-class="{\'has-error\': invalidHours}">\n        <input style="width:50px;" type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2">\n      </td>\n      <td>:</td>\n      <td class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n        <input style="width:50px;" type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2">\n      </td>\n      <td ng-show="showMeridian"><button type="button" ng-class="{disabled: noToggleMeridian()}" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n    </tr>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td><a ng-click="decrementHours()" ng-class="{disabled: noDecrementHours()}" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td>&nbsp;</td>\n      <td><a ng-click="decrementMinutes()" ng-class="{disabled: noDecrementMinutes()}" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/typeahead/typeahead-match.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-match.html",'<a href tabindex="-1" ng-bind-html="match.label | uibTypeaheadHighlight:query"></a>\n')}]),angular.module("template/typeahead/typeahead-popup.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-popup.html",'<ul class="dropdown-menu" ng-show="isOpen() && !moveInProgress" ng-style="{top: position().top+\'px\', left: position().left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{::match.id}}">\n        <div uib-typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')}]),!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>');