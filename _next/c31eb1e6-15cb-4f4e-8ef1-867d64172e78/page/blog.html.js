module.exports=__NEXT_REGISTER_PAGE("/blog.html",function(){return{page:webpackJsonp([5],{312:function(e,t,a){e.exports=a(313)},313:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(27),r=a.n(n),o=a(0),l=a.n(o),c=a(10),i=a(59),m=a(154),u=a(155),s=a(156),p=a(157),f=a(158),b=a(159),E=a(160),d=a(161);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function h(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=[m.metadata,u.metadata,s.metadata,p.metadata,d.metadata,E.metadata,b.metadata,f.metadata].sort(function(e,t){return t.publishedDay-e.publishedDay}),A=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=v(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).articlesMetadata=g(w),a}var a,n,m;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,o["Component"]),a=t,(n=[{key:"render",value:function(){return l.a.createElement(c.a,null,l.a.createElement("h1",{className:"mv0 tc"},"Blog"),this.articlesMetadata.map(function(e){return l.a.createElement("div",{className:"mt4",key:e.title},l.a.createElement(r.a,{href:e.relativeUrl,passHref:!0},l.a.createElement("a",{href:"#!",className:"black-alternative bg-animate br2 db bg-white hover-bg-washed-yellow no-underline overflow-hidden"},e.coverUrl&&l.a.createElement("img",{src:e.coverUrl,alt:e.coverAlt,className:"v-btm"}),l.a.createElement("div",{className:"".concat(e.coverUrl?"bb bl br":"ba"," b--black-10 bw1 pa3")},l.a.createElement("h2",{className:"f4 f3-ns mb3 mt0"},e.title),l.a.createElement("p",{className:"black-alternative-light f6 mb0 mt3"},l.a.createElement("span",null,"Por "),l.a.createElement("strong",null,e.authors.join(", ")),l.a.createElement("span",null,". Publicado el "),l.a.createElement(i.a,{date:e.publishedDay}),l.a.createElement("span",null,".")),l.a.createElement("p",{className:"mv3"},e.description)))))}))}}])&&h(a.prototype,n),m&&h(a,m),t}(),P=a(4),j=a.n(P),O=a(9),S=a.n(O),T=j()().publicRuntimeConfig,C={description:"En este blog compartimos información relevante para la comunidad.",title:"Blog - ".concat(T.REACT_APP_TITLE),url:"".concat(T.REACT_APP_URL,"blog.html")};t.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(S.a,null,l.a.createElement("title",null,C.title),l.a.createElement("meta",{name:"description",content:C.description}),l.a.createElement("meta",{property:"og:url",content:C.url}),l.a.createElement("meta",{property:"og:type",content:"website"}),l.a.createElement("meta",{property:"og:title",content:C.title}),l.a.createElement("meta",{property:"og:description",content:C.description}),l.a.createElement("meta",{property:"og:image",content:T.REACT_APP_SOCIAL_IMAGE}),l.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.a.createElement("meta",{name:"twitter:site",content:"@meetupjs_ar"}),l.a.createElement("meta",{name:"twitter:creator",content:"@meetupjs_ar"}),l.a.createElement("meta",{name:"twitter:title",content:C.title}),l.a.createElement("meta",{name:"twitter:description",content:C.description}),l.a.createElement("meta",{name:"twitter:image",content:T.REACT_APP_SOCIAL_IMAGE})),l.a.createElement(A,null))}}},[312]).default}});