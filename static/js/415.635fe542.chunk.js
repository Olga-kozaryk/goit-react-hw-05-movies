"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{544:function(n,t,e){var r=(0,e(924).ZP)("div")((function(){return{borderTop:"solid 1px rgba(2,0,36,1)",textAlign:"center",background:"rgba(103,103,212,0.8)",h1:{color:"rgba(2,0,36,1)"}}}));t.Z=r},47:function(n,t,e){e.d(t,{Z:function(){return i}});var r=e(689),a=e(87),u=(0,e(924).ZP)("ul")((function(){return{listStyle:"none",marginLeft:"auto",marginRight:"auto",li:{fontSize:"18px",fontWeight:"500",marginBottom:"15px"}}})),c=e(184),i=function(n){var t=n.movies,e=r.TH;return(0,c.jsx)("div",{children:(0,c.jsx)(u,{children:t.map((function(n){var t=n.id,r=n.title;return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"/movies/"+t,state:{from:null===e||void 0===e?void 0:e.from},children:r})},t)}))})})}},415:function(n,t,e){e.r(t);var r=e(861),a=e(439),u=e(757),c=e.n(u),i=e(544),o=e(47),s=e(791),f=e(542),p=e(184);t.default=function(){var n=(0,s.useState)([]),t=(0,a.Z)(n,2),e=t[0],u=t[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,f.wr)();case 2:t=n.sent,e=t.results,u(e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,p.jsxs)(i.Z,{children:[(0,p.jsx)("h1",{children:"Trending today"}),e.length?(0,p.jsx)(o.Z,{movies:e}):(0,p.jsx)("p",{children:"Sorry, we could not fetch the trending movies. Please try again later."})]})}},542:function(n,t,e){e.d(t,{Hx:function(){return d},KL:function(){return s},Wg:function(){return f},uV:function(){return p},wr:function(){return o}});var r=e(861),a=e(757),u=e.n(a),c=e(294);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="09a8cd7e0a760fa659d2c7c5b140aba5",o=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"}/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.635fe542.chunk.js.map