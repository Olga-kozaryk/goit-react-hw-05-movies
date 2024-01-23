"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[267],{544:function(e,n,t){var r=(0,t(924).ZP)("div")((function(){return{borderTop:"solid 1px rgba(2,0,36,1)",textAlign:"center",background:"rgba(103,103,212,0.8)",h1:{color:"rgba(2,0,36,1)"}}}));n.Z=r},47:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(689),a=t(87),i=(0,t(924).ZP)("ul")((function(){return{listStyle:"none",marginLeft:"auto",marginRight:"auto",li:{fontSize:"18px",fontWeight:"500",marginBottom:"15px"}}})),u=t(184),o=function(e){var n=e.movies,t=r.TH;return(0,u.jsx)("div",{children:(0,u.jsx)(i,{children:n.map((function(e){var n=e.id,r=e.title;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/"+n,state:{from:null===t||void 0===t?void 0:t.from},children:r})},n)}))})})}},825:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var r=t(861),a=t(439),i=t(757),u=t.n(i),o=t(544),c=t(24),s=t(47),p=t(744),f=t(924),l=(0,f.ZP)("form")((function(){return{display:"flex",alignItems:"center",width:"100%",maxWidth:"600px",backgroundColor:"#fff",borderRadius:"10px",border:"solid 1px rgba(2,0,36,1)",overflow:"hidden",button:{display:"inline-block",width:"48px",height:"48px",border:"0",backgroundSize:"40%",backgroundRepeat:"no-repeat",backgroundPosition:"center",opacity:"0.6",transition:"opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)",cursor:"pointer",outline:"none","&:hover":{opacity:3}},input:{display:"inline-block",width:"100%",font:"inherit",fontSize:"20px",border:"none",outline:"none",paddingLeft:"4px",paddingRight:"4px","&::placeholder":{font:"inherit",fontSize:"18px"}}}})),d=(0,f.ZP)("div")((function(){return{display:"flex",justifyContent:"center",paddingBottom:"40px"}})),h=t(184),v=function(e){var n=e.OnSubmit,t=e.OnChange,r=e.valueSearch;return(0,h.jsx)(d,{children:(0,h.jsxs)(l,{onSubmit:n,children:[(0,h.jsx)("input",{name:"search",type:"text",value:r,placeholder:"Search movies",onChange:t}),(0,h.jsx)("button",{type:"submit",children:(0,h.jsx)(p.wnI,{size:"20"})})]})})},g=t(791),x=t(87),m=t(542),b=function(){var e=(0,g.useState)([]),n=(0,a.Z)(e,2),t=n[0],i=n[1],p=(0,g.useState)(!0),f=(0,a.Z)(p,2),l=f[0],d=f[1],b=(0,g.useState)(""),k=(0,a.Z)(b,2),y=k[0],Z=k[1],w=(0,g.useState)(""),S=(0,a.Z)(w,2),j=S[0],_=S[1],C=(0,x.lr)(),z=(0,a.Z)(C,2),P=z[0],U=z[1],L=(0,g.useCallback)(function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),Z(""),e.next=5,(0,m.KL)(n);case 5:t=e.sent,r=t.results,i(r),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),Z(e.t0.message),i([]);case 14:return e.prev=14,d(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,10,14,17]])})));return function(n){return e.apply(this,arguments)}}(),[]);return(0,g.useEffect)((function(){var e,n=null!==(e=P.get("search"))&&void 0!==e?e:"";L(n)}),[L,P]),(0,h.jsxs)(o.Z,{children:[(0,h.jsx)("h1",{children:"Search Movie"}),(0,h.jsx)(v,{OnSubmit:function(e){e.preventDefault(),U({search:j})},OnChange:function(e){_(e.target.value)},valueSearch:j}),l&&(0,h.jsx)(c.Z,{}),y&&(0,h.jsx)("p",{children:"Sorry, we could not fetch the movies. Please try again later."}),(0,h.jsx)(s.Z,{movies:t})]})}},542:function(e,n,t){t.d(n,{Hx:function(){return l},KL:function(){return s},Wg:function(){return p},uV:function(){return f},wr:function(){return c}});var r=t(861),a=t(757),i=t.n(a),u=t(294);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="09a8cd7e0a760fa659d2c7c5b140aba5",c=function(){var e=(0,r.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(o));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/search/movie?api_key=".concat(o,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(n,"?api_key=").concat(o,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(n,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(n,"}/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=267.604c1b6e.chunk.js.map