import{r as l,a as c}from"./index-BwDkhjyp.js";var p={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b=l,v=Symbol.for("react.element"),O=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,m=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function _(r,e,n){var t,o={},a=null,f=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(f=e.ref);for(t in e)d.call(e,t)&&!E.hasOwnProperty(t)&&(o[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)o[t]===void 0&&(o[t]=e[t]);return{$$typeof:v,type:r,key:a,ref:f,props:o,_owner:m.current}}s.Fragment=O;s.jsx=_;s.jsxs=_;p.exports=s;var j=p.exports,h=function(e){return e()},y=c.useInsertionEffect?c.useInsertionEffect:!1,R=y||h,k=y||l.useLayoutEffect;function u(){return u=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)({}).hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r},u.apply(null,arguments)}function I(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function i(r,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,t){return n.__proto__=t,n},i(r,e)}function w(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,i(r,e)}export{i as _,R as a,w as b,I as c,u as d,j,k as u};
