"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[266],{294:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(643),s=t(184),i=function(){return(0,s.jsx)(r.g4,{height:"80",width:"80",color:"#3f51b5",ariaLabel:"grid-loading",radius:"12.5",wrapperStyle:{margin:"auto"},visible:!0})}},266:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(439),s=t(791),i=t(689),a=t(87),c=t(185),u=t(686),o=t.n(u),l=t(294),p=t(714),d=t(184),h=function(){var e,n,t=(0,i.UO)().movieId,u=(0,i.TH)(),h=(0,s.useRef)(null!==(e=null===(n=u.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies"),f=(0,s.useState)(!1),x=(0,r.Z)(f,2),v=x[0],g=x[1],j=(0,s.useState)({}),m=(0,r.Z)(j,2),w=m[0],y=m[1],b=(0,s.useState)(!1),_=(0,r.Z)(b,2),k=_[0],Z=_[1];return(0,s.useEffect)((function(){try{g(!0),(0,p.Vn)(t).then((function(e){e?(y((function(){return e})),g(!1)):g(!1)}))}catch(e){Z(!0),g(!1),o().Notify.failure("Oops... Something went wrong please try again!"),console.log(k)}}),[k,t]),(0,d.jsxs)("div",{children:[(0,d.jsxs)("section",{children:[(0,d.jsx)(a.rU,{to:h.current,children:(0,d.jsxs)("p",{children:[(0,d.jsx)(c.And,{})," Go back"]})}),v&&(0,d.jsx)(l.Z,{}),(0,d.jsx)("h2",{children:w.title}),(0,d.jsx)("img",{src:w.poster_path&&"https://image.tmdb.org/t/p/w200/".concat(w.poster_path),alt:"poster"}),(0,d.jsxs)("ul",{children:[(0,d.jsxs)("li",{children:["User Score: ",(10*w.vote_average).toFixed(0)]}),(0,d.jsxs)("li",{children:[(0,d.jsx)("b",{children:"Overview"}),(0,d.jsx)("p",{children:w.overview})]}),(0,d.jsxs)("li",{children:[(0,d.jsx)("b",{children:"Genres"}),(0,d.jsx)("p",{children:w.genres&&w.genres.map((function(e){var n=e.id,t=e.name;return(0,d.jsxs)("span",{children:[t," "]},n)}))})]})]})]}),(0,d.jsxs)("section",{children:[(0,d.jsx)("h2",{children:"Additional information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(a.rU,{to:"cast",children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(a.rU,{to:"reviews",children:"Reviews"})})]}),(0,d.jsx)(s.Suspense,{children:(0,d.jsx)(i.j3,{})})]})]})}},714:function(e,n,t){t.d(n,{Bt:function(){return h},Vn:function(){return p},vw:function(){return o},y:function(){return x}});var r=t(861),s=t(757),i=t.n(s),a=t(243),c="https://api.themoviedb.org/3/",u="ae38d5c8baf36c9c4ca14e9456f3c0fd";function o(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function e(){var n,t,r,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"trending/movie/day",n="?api_key=".concat(u),t=c+"trending/movie/day"+n,e.next=5,a.Z.get(t);case 5:return r=e.sent,e.next=8,r.data.results;case 8:return s=e.sent,e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function e(n){var t,r,s,o,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="movie/".concat(n),r="?api_key=".concat(u),"&language=en-US",s=c+t+r+"&language=en-US",e.next=6,a.Z.get(s);case 6:return o=e.sent,e.next=9,o.data;case 9:return l=e.sent,e.abrupt("return",l);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function e(n){var t,r,s,o,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="movie/".concat(n,"/reviews"),r="?api_key=".concat(u),"&language=en-US",s=c+t+r+"&language=en-US",e.next=6,a.Z.get(s);case 6:return o=e.sent,e.next=9,o.data.results;case 9:return l=e.sent,console.log(l),e.abrupt("return",l);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function e(n){var t,r,s,o,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="movie/".concat(n,"/credits"),r="?api_key=".concat(u),s=c+t+r,e.next=5,a.Z.get(s);case 5:return o=e.sent,e.next=8,o.data.cast;case 8:return l=e.sent,e.abrupt("return",l);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=266.02f238b5.chunk.js.map