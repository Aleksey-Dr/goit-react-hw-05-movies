"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[303],{294:function(t,n,e){e.d(n,{Z:function(){return i}});var r=e(643),a=e(184),i=function(){return(0,a.jsx)(r.g4,{height:"80",width:"80",color:"#3f51b5",ariaLabel:"grid-loading",radius:"12.5",wrapperStyle:{margin:"auto"},visible:!0})}},303:function(t,n,e){e.r(n),e.d(n,{default:function(){return h}});var r=e(433),a=e(439),i=e(791),u=e(686),c=e.n(u),o=e(294),s=e(689),f=e(87),l=e(184),d=function(t){var n=t.id,e=t.title,r=(0,s.TH)();return(0,l.jsx)("li",{children:(0,l.jsx)(f.rU,{to:"movies/".concat(n),state:{from:r},children:e})})},p=e(714),h=function(){var t=(0,i.useState)(!1),n=(0,a.Z)(t,2),e=n[0],u=n[1],s=(0,i.useState)([]),f=(0,a.Z)(s,2),h=f[0],g=f[1],v=(0,i.useState)(!1),y=(0,a.Z)(v,2),m=y[0],w=y[1];return(0,i.useEffect)((function(){try{u(!0),(0,p.v)().then((function(t){0===t.length?(c().Notify.warning("Nothing found for your request"),u(!1)):(g((function(){return(0,r.Z)(t)})),u(!1))}))}catch(t){w(!0),u(!1),c().Notify.failure("Oops... Something went wrong please try again!"),console.log(m)}}),[m]),(0,l.jsxs)("div",{children:[e&&(0,l.jsx)(o.Z,{}),(0,l.jsx)("ul",{children:h&&h.map((function(t){var n=t.id,e=t.title;return(0,l.jsx)(d,{id:n,title:e},n)}))})]})}},714:function(t,n,e){e.d(n,{V:function(){return l},v:function(){return s}});var r=e(861),a=e(757),i=e.n(a),u=e(243),c="https://api.themoviedb.org/3/",o="ae38d5c8baf36c9c4ca14e9456f3c0fd";function s(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function t(){var n,e,r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"trending/movie/day",n="?api_key=".concat(o),e=c+"trending/movie/day"+n,t.next=5,u.Z.get(e);case 5:return r=t.sent,t.next=8,r.data.results;case 8:return a=t.sent,t.abrupt("return",a);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function t(n){var e,r,a,s,f;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="movie/".concat(n),r="?api_key=".concat(o),"&language=en-US",a=c+e+r+"&language=en-US",t.next=6,u.Z.get(a);case 6:return s=t.sent,t.next=9,s.data;case 9:return f=t.sent,t.abrupt("return",f);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=303.a21114d0.chunk.js.map