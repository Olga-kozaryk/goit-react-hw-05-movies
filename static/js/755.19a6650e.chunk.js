"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[755],{544:function(e,n,t){var r=(0,t(924).ZP)("div")((function(){return{borderTop:"solid 1px rgba(2,0,36,1)",textAlign:"center",background:"rgba(103,103,212,0.8)",h1:{color:"rgba(2,0,36,1)"}}}));n.Z=r},755:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(861),a=t(439),u=t(757),c=t.n(u),i=t(544),o=(0,t(924).ZP)("ul")((function(){return{marginTop:"30px",display:"flex",alignItems:"center",gap:"40px",flexWrap:"wrap",listStyle:"none",li:{paddingBottom:"10px",h2:{marginBottom:"10px",fontSize:"20px",fontWeight:"500"}}}})),s=t(184),p=function(e){var n=e.reviews;return(0,s.jsx)(o,{children:n.map((function(e){var n=e.id,t=e.author,r=e.content;return(0,s.jsxs)("li",{children:[(0,s.jsxs)("h2",{children:["Author: ",t]}),(0,s.jsx)("p",{children:r})]},n)}))})},f=t(791),l=t(689),v=t(542),d=function(){var e=(0,l.UO)().movieId,n=(0,f.useState)([]),t=(0,a.Z)(n,2),u=t[0],o=t[1];return(0,f.useEffect)((function(){var n=function(){var n=(0,r.Z)(c().mark((function n(){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,v.Hx)(e);case 3:t=n.sent,r=t.results,o(r),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),(0,s.jsxs)(i.Z,{children:[(0,s.jsx)("h1",{children:"Reviews"}),u.length?(0,s.jsx)(p,{reviews:u}):(0,s.jsx)("p",{children:"We don't have any reviews for this movie yet."})]})}},542:function(e,n,t){t.d(n,{Hx:function(){return l},KL:function(){return s},Wg:function(){return p},uV:function(){return f},wr:function(){return o}});var r=t(861),a=t(757),u=t.n(a),c=t(294);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="09a8cd7e0a760fa659d2c7c5b140aba5",o=function(){var e=(0,r.Z)(u().mark((function e(){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(n,"}/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=755.19a6650e.chunk.js.map