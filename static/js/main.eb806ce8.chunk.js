/*! For license information please see main.eb806ce8.chunk.js.LICENSE.txt */
(this["webpackJsonp@ramonak/react-excel-example"]=this["webpackJsonp@ramonak/react-excel-example"]||[]).push([[0],[,,,,,,function(e,t){},,function(e,t,n){e.exports=n(25)},function(e,t,n){},,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(9);var r=n(0),a=n.n(r),o=n(7),c=n.n(o),u=n(1),s=n(4),l=n.n(s);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){return e(t={exports:{}},t.exports),t.exports}var m="function"===typeof Symbol&&Symbol.for,y=m?Symbol.for("react.element"):60103,b=m?Symbol.for("react.portal"):60106,d=m?Symbol.for("react.fragment"):60107,v=m?Symbol.for("react.strict_mode"):60108,O=m?Symbol.for("react.profiler"):60114,j=m?Symbol.for("react.provider"):60109,h=m?Symbol.for("react.context"):60110,S=m?Symbol.for("react.async_mode"):60111,E=m?Symbol.for("react.concurrent_mode"):60111,g=m?Symbol.for("react.forward_ref"):60112,C=m?Symbol.for("react.suspense"):60113,x=m?Symbol.for("react.suspense_list"):60120,w=m?Symbol.for("react.memo"):60115,$=m?Symbol.for("react.lazy"):60116,k=m?Symbol.for("react.block"):60121,P=m?Symbol.for("react.fundamental"):60117,T=m?Symbol.for("react.responder"):60118,_=m?Symbol.for("react.scope"):60119;function N(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case y:switch(e=e.type){case S:case E:case d:case O:case v:case C:return e;default:switch(e=e&&e.$$typeof){case h:case g:case $:case w:case j:return e;default:return t}}case b:return t}}}function F(e){return N(e)===E}var M={AsyncMode:S,ConcurrentMode:E,ContextConsumer:h,ContextProvider:j,Element:y,ForwardRef:g,Fragment:d,Lazy:$,Memo:w,Portal:b,Profiler:O,StrictMode:v,Suspense:C,isAsyncMode:function(e){return F(e)||N(e)===S},isConcurrentMode:F,isContextConsumer:function(e){return N(e)===h},isContextProvider:function(e){return N(e)===j},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===y},isForwardRef:function(e){return N(e)===g},isFragment:function(e){return N(e)===d},isLazy:function(e){return N(e)===$},isMemo:function(e){return N(e)===w},isPortal:function(e){return N(e)===b},isProfiler:function(e){return N(e)===O},isStrictMode:function(e){return N(e)===v},isSuspense:function(e){return N(e)===C},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===d||e===E||e===O||e===v||e===C||e===x||"object"===typeof e&&null!==e&&(e.$$typeof===$||e.$$typeof===w||e.$$typeof===j||e.$$typeof===h||e.$$typeof===g||e.$$typeof===P||e.$$typeof===T||e.$$typeof===_||e.$$typeof===k)},typeOf:N},R=(p((function(e,t){0})),p((function(e){e.exports=M})),Object.getOwnPropertySymbols),B=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;function U(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}})()&&Object.assign;var A="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function W(e,t,n,r,a){}W.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function D(){}function L(){}L.resetWarningCache=D;var q=p((function(e){e.exports=function(){function e(e,t,n,r,a,o){if(o!==A){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:L,resetWarningCache:D};return n.PropTypes=n,n}()})),z="_By978",J=function(e){var t,n=e.initialData,o=e.onSheetUpdate,c=e.reactExcelClassName,u=e.activeSheetClassName,s=Object(r.useState)([]),p=s[0],m=s[1],y=Object(r.useState)(void 0),b=y[0],d=y[1],v=Object(r.useState)([]),O=v[0],j=v[1],h=Object(r.useState)(0),S=h[0],E=h[1],g=function(e,t,n){var r,a,c=Object.values(b)[0][t];c.splice(n,1,e),Object.values(b)[0].splice(t,1,c),d(f(f({},b),{},((r={})[Object.keys(b)[0]]=Object.values(b)[0],r))),o&&o(((a={})[Object.keys(b)[0]]=Object.values(b)[0],a))};return Object(r.useEffect)((function(){n&&function(){var e=n.SheetNames;j(e);var t=e.map((function(e){var t,r=n.Sheets[e],a=l.a.utils.sheet_to_json(r,{header:1,defval:""});return(t={})[e]=a,t}));m(t),d(t[0]),o&&o(t[0])}()}),[n]),a.a.createElement("div",{className:c},a.a.createElement("div",null,O.map((function(e,t){return a.a.createElement("button",{key:t,value:e,onClick:function(e){return function(e,t){var n=p.find((function(t){return Object.keys(t).includes(e.target.value)}));d(n),o&&o(n),E(t)}(e,t)},className:S===t?""+u:""},e)}))),b&&a.a.createElement("table",{className:z},(t=Object.values(b)[0][0],a.a.createElement("thead",null,a.a.createElement("tr",null,Object.values(t).map((function(e,t){return a.a.createElement("th",{key:t,contentEditable:!0,suppressContentEditableWarning:!0,onBlur:function(e){g(e.currentTarget.textContent,i,t)}},e)}))))),function(e){var t=e.slice(1);return a.a.createElement("tbody",null,t.map((function(e,t){return a.a.createElement("tr",{key:t},e.map((function(e,t){return a.a.createElement("td",{key:t,contentEditable:!0,suppressContentEditableWarning:!0,onBlur:function(e){g(e.currentTarget.textContent,i,t)}},e)})))})))}(Object.values(b)[0])))};J.propTypes={initialData:q.object,onSheetUpdate:q.func,activeSheetClassName:q.string,reactExcelClassName:q.string};var V=function(e){var t=new FileReader;return new Promise((function(n,r){t.onload=function(e){var t=new Uint8Array(e.target.result),a=l.a.read(t,{type:"array"});a?n(a):r({message:"Error reading file"})},t.readAsArrayBuffer(e)}))};V.propTypes={file:q.object};var H=function(e){for(var t=Object.values(e)[0],n=t[0],r=[],a=function(e){var a=t[e];r.push(Object.fromEntries(n.map((function(e,t){return[n[t],a[t]]}))))},o=1;o<t.length;o++)a(o);return r};H.propTypes={currentSheet:q.object};n(23),n(24);var Y=function(){var e=Object(r.useState)(void 0),t=Object(u.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)({}),i=Object(u.a)(c,2),s=i[0],l=i[1],f=Object(r.useState)(void 0),p=Object(u.a)(f,2),m=p[0],y=p[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement("input",{type:"file",accept:".xlsx",onChange:function(e){var t=e.target.files[0];V(t).then((function(e){return o(e)})).catch((function(e){return console.error(e)}))},id:"upload",style:{display:"none"}}),a.a.createElement("label",{htmlFor:"upload"},a.a.createElement("button",{className:"custom-button",onClick:function(){return document.getElementById("upload").click()}},"Upload")),a.a.createElement(J,{initialData:n,onSheetUpdate:function(e){return l(e)},activeSheetClassName:"active-sheet",reactExcelClassName:"react-excel"}),n&&a.a.createElement("button",{className:"custom-button",onClick:function(){var e=H(s);y(e)}},"Transform"),m&&a.a.createElement("textarea",{cols:70,rows:30,defaultValue:JSON.stringify(m,null,2),className:"text-area"}))};c.a.render(a.a.createElement(Y,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.eb806ce8.chunk.js.map