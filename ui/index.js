!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["investira.react"]=t():e["investira.react"]=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/ui/",r(r.s=7)}([function(e,t,r){"use strict";e.exports=r(3)},function(e,t,r){e.exports={deck:"Deck_deck__1Azfg",warp:"Deck_warp__K8KEN",view:"Deck_view__1KhQU",viewOffset:"Deck_viewOffset__ZpRYY",viewPrev:"Deck_viewPrev__2ViA4",viewActive:"Deck_viewActive__hoSab"}},function(e,t,r){e.exports=r(5)()},function(e,t,r){"use strict";
/** @license React v16.8.3
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(4),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,f=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.concurrent_mode"):60111,y=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,v=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t=arguments.length-1,r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)r+="&args[]="+encodeURIComponent(arguments[n+1]);!function(e,t,r,n,o,u,i,c){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var a=[r,n,o,u,i,c],f=0;(e=Error(t.replace(/%s/g,function(){return a[f++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",r)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w={};function O(e,t,r){this.props=e,this.context=t,this.refs=w,this.updater=r||_}function g(){}function S(e,t,r){this.props=e,this.context=t,this.refs=w,this.updater=r||_}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&h("85"),this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=O.prototype;var j=S.prototype=new g;j.constructor=S,n(j,O.prototype),j.isPureReactComponent=!0;var k={current:null},P={current:null},x=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var n=void 0,o={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)x.call(t,n)&&!E.hasOwnProperty(n)&&(o[n]=t[n]);var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){for(var f=Array(a),l=0;l<a;l++)f[l]=arguments[l+2];o.children=f}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===o[n]&&(o[n]=a[n]);return{$$typeof:u,type:e,key:i,ref:c,props:o,_owner:P.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var $=/\/+/g,T=[];function A(e,t,r,n){if(T.length){var o=T.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function V(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function I(e,t,r){return null==e?0:function e(t,r,n,o){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var a=!1;if(null===t)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case u:case i:a=!0}}if(a)return n(o,t,""===r?"."+D(t,0):r),1;if(a=0,r=""===r?".":r+":",Array.isArray(t))for(var f=0;f<t.length;f++){var l=r+D(c=t[f],f);a+=e(c,l,n,o)}else if(l=null===t||"object"!=typeof t?null:"function"==typeof(l=m&&t[m]||t["@@iterator"])?l:null,"function"==typeof l)for(t=l.call(t),f=0;!(c=t.next()).done;)a+=e(c=c.value,l=r+D(c,f++),n,o);else"object"===c&&h("31","[object Object]"==(n=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return a}(e,"",t,r)}function D(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?N(e,n,r,function(e){return e}):null!=e&&(R(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace($,"$&/")+"/")+r)),n.push(e))}function N(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace($,"$&/")+"/"),I(e,q,t=A(t,u,n,o)),V(t)}function U(){var e=k.current;return null===e&&h("307"),e}var L={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return N(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;I(e,M,t=A(null,null,t,r)),V(t)},count:function(e){return I(e,function(){return null},null)},toArray:function(e){var t=[];return N(e,t,null,function(e){return e}),t},only:function(e){return R(e)||h("143"),e}},createRef:function(){return{current:null}},Component:O,PureComponent:S,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:y,render:e}},lazy:function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:v,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return U().useCallback(e,t)},useContext:function(e,t){return U().useContext(e,t)},useEffect:function(e,t){return U().useEffect(e,t)},useImperativeHandle:function(e,t,r){return U().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return U().useLayoutEffect(e,t)},useMemo:function(e,t){return U().useMemo(e,t)},useReducer:function(e,t,r){return U().useReducer(e,t,r)},useRef:function(e){return U().useRef(e)},useState:function(e){return U().useState(e)},Fragment:c,StrictMode:a,Suspense:d,createElement:C,cloneElement:function(e,t,r){null==e&&h("267",e);var o=void 0,i=n({},e.props),c=e.key,a=e.ref,f=e._owner;if(null!=t){void 0!==t.ref&&(a=t.ref,f=P.current),void 0!==t.key&&(c=""+t.key);var l=void 0;for(o in e.type&&e.type.defaultProps&&(l=e.type.defaultProps),t)x.call(t,o)&&!E.hasOwnProperty(o)&&(i[o]=void 0===t[o]&&void 0!==l?l[o]:t[o])}if(1===(o=arguments.length-2))i.children=r;else if(1<o){l=Array(o);for(var s=0;s<o;s++)l[s]=arguments[s+2];i.children=l}return{$$typeof:u,type:e.type,key:c,ref:a,props:i,_owner:f}},createFactory:function(e){var t=C.bind(null,e);return t.type=e,t},isValidElement:R,version:"16.8.3",unstable_ConcurrentMode:p,unstable_Profiler:f,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentOwner:P,assign:n}},F={default:L},z=F&&L||F;e.exports=z.default||z},function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,i,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var f in r=Object(arguments[a]))o.call(r,f)&&(c[f]=r[f]);if(n){i=n(r);for(var l=0;l<i.length;l++)u.call(r,i[l])&&(c[i[l]]=r[i[l]])}}return c}},function(e,t,r){"use strict";var n=r(6);function o(){}function u(){}u.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,u,i){if(i!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:u,resetWarningCache:o};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n);function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=function(e){var t=e.children,r=u(e,["children"]);return o.a.createElement("div",r,t)},c=r(2),a=r.n(c),f=r(1),l=r.n(f);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,d(t).apply(this,arguments))}var r,u,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,n["Component"]),r=t,(u=[{key:"viewState",value:function(e){var t=l.a.view;return this.isPrev(this.props.prevView,e)&&(t+=" ".concat(l.a.viewPrev," ")),this.isActive(this.props.activeView,e)&&(t+=" ".concat(l.a.viewActive," ")),this.isActive(this.props.activeView,e)||this.isPrev(this.props.prevView,e)||(t+=" ".concat(l.a.viewOffset," ")),t}},{key:"isActive",value:function(e,t){return e===t}},{key:"isPrev",value:function(e,t){return!!e.includes(t)}},{key:"mapChildrens",value:function(e){var t=this;return e.map(function(e,r){return!1!==e&&o.a.createElement(i,{key:r,id:"deck-".concat(e.props.id),className:t.viewState(e.props.id),style:t.props.activeView===e.props.id?{zIndex:1101+r}:{zIndex:1100}},e)})}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.id;return o.a.createElement("div",{id:"deck-".concat(r),className:l.a.deck},o.a.createElement("div",{id:"deck-".concat(r,"__warp"),className:l.a.warp},t.constructor===Array?this.mapChildrens(t):this.props.children))}}])&&p(r.prototype,u),c&&p(r,c),t}();b.propTypes={id:a.a.string.isRequired,prevView:a.a.array,activeView:a.a.string.isRequired},b.defaultProps={prevView:[]};var m=b;r.d(t,"View",function(){return i}),r.d(t,"Deck",function(){return m})}])});