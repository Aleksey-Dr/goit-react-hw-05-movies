"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[793],{294:function(n,t,e){e.d(t,{Z:function(){return u}});var r=e(643),a=e(184),u=function(){return(0,a.jsx)(r.g4,{height:"80",width:"80",color:"#3f51b5",ariaLabel:"grid-loading",radius:"12.5",wrapperStyle:{margin:"auto"},visible:!0})}},793:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r=e(433),a=e(439),u=e(791),c=e(689),i=e(686),s=e.n(i),o=e(294),p=e(714),f=e(184),l=function(){var n=(0,c.UO)().movieId,t=(0,u.useState)(!1),e=(0,a.Z)(t,2),i=e[0],l=e[1],h=(0,u.useState)([]),d=(0,a.Z)(h,2),g=d[0],v=d[1],x=(0,u.useState)(!1),y=(0,a.Z)(x,2),w=y[0],m=y[1];return(0,u.useEffect)((function(){try{l(!0),(0,p.Bt)(n).then((function(n){0===n.length||v((function(){return(0,r.Z)(n)})),l(!1)}))}catch(t){m(!0),l(!1),s().Notify.failure("Oops... Something went wrong please try again!"),console.log(w)}}),[w,n]),(0,f.jsxs)("div",{children:[i&&(0,f.jsx)(o.Z,{}),(0,f.jsx)("h3",{children:"Reviews"}),g.length>0?(0,f.jsx)("ul",{children:g.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,f.jsxs)("li",{children:[(0,f.jsxs)("p",{children:["Author: ",e]}),(0,f.jsx)("p",{children:r})]},t)}))}):"Sorry no information"]})}},714:function(n,t,e){e.d(t,{Bt:function(){return h},Vn:function(){return f},vw:function(){return o},y:function(){return g}});var r=e(861),a=e(757),u=e.n(a),c=e(243),i="https://api.themoviedb.org/3/",s="ae38d5c8baf36c9c4ca14e9456f3c0fd";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function n(){var t,e,r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"trending/movie/day",t="?api_key=".concat(s),e=i+"trending/movie/day"+t,n.next=5,c.Z.get(e);case 5:return r=n.sent,n.next=8,r.data.results;case 8:return a=n.sent,n.abrupt("return",a);case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function n(t){var e,r,a,o,p;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="movie/".concat(t),r="?api_key=".concat(s),"&language=en-US",a=i+e+r+"&language=en-US",n.next=6,c.Z.get(a);case 6:return o=n.sent,n.next=9,o.data;case 9:return p=n.sent,n.abrupt("return",p);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function n(t){var e,r,a,o,p;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="movie/".concat(t,"/reviews"),r="?api_key=".concat(s),"&language=en-US",a=i+e+r+"&language=en-US",n.next=6,c.Z.get(a);case 6:return o=n.sent,n.next=9,o.data.results;case 9:return p=n.sent,console.log(p),n.abrupt("return",p);case 12:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function n(t){var e,r,a,o,p;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="movie/".concat(t,"/credits"),r="?api_key=".concat(s),a=i+e+r,n.next=5,c.Z.get(a);case 5:return o=n.sent,n.next=8,o.data.cast;case 8:return p=n.sent,n.abrupt("return",p);case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=793.2ab4f468.chunk.js.map