(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6938)}])},7966:function(e,n,t){"use strict";t.d(n,{r:function(){return s}});var r=t(5893),o=t(1664),a=t.n(o),l=t(7427),i=t.n(l);let s=e=>{let{variant:n,...t}=e;return(0,r.jsx)(a(),{...t,className:"".concat(i().link," ").concat(n?i()[n]:"")})}},8641:function(e,n,t){"use strict";var r=t(5893),o=t(5675),a=t.n(o),l=t(8141),i=t.n(l);let s=e=>(0,r.jsx)("a",{href:"https://tko-aly.fi",target:"_blank",rel:"noreferrer noopener",...e,children:(0,r.jsx)(a(),{className:i().logo,src:"/logo.svg",width:72,height:72,alt:"Logo of TKO-\xe4ly ry"})});n.Z=s},6938:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return w},default:function(){return j}});var r=t(5893),o=t(706),a=t.n(o),l=t(7294),i=t(1515),s=t(1163),c=t.n(s),u=t(9008),m=t.n(u),d=t(7966),_=t(8641),p=t(1587),g=t.n(p);let f=e=>(0,r.jsx)("input",{...e,className:g().input}),h=()=>{let[e,n]=(0,l.useState)(!1);(0,l.useEffect)(()=>{if("serviceWorker"in navigator&&void 0!==window.workbox){let e=window.workbox,t=()=>{n(!0)};e.addEventListener("waiting",t)}},[n]);let t=(0,l.useCallback)(()=>{let e=window.workbox;e.addEventListener("controlling",()=>{window.location.reload()}),e.messageSkipWaiting()},[]),r=(0,l.useCallback)(()=>{n(!1)},[n]);return{promptVisible:e,rejectUpdate:r,updateWorker:t}};var x=t(5254),k=t.n(x);let y=e=>{let{variant:n,...t}=e;return(0,r.jsx)("button",{...t,className:"".concat(k().button," ").concat(n?k()[n]:"")})},b=e=>{let{songs:n}=e,{promptVisible:t,updateWorker:o}=h(),[s,u]=(0,l.useState)(""),p=(0,l.useCallback)(e=>{let{target:n}=e;u(n.value)},[u]),g=(0,l.useMemo)(()=>{if(0===s.trim().length)return n.map(e=>({...e,score:100}));let e=(0,i.Kl)(s,n,{scorer:i.Nr,processor:e=>e.title,cutoff:40,limit:15});return e.map(e=>{let[n,t]=e;return{...n,score:t}})},[s,n]),x=(0,l.useCallback)(()=>{0!==g.length&&c().push("songs/".concat(g[0].slug))},[g]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m(),{children:(0,r.jsx)("title",{children:"laulum.me | TKO-\xe4ly Songbook"})}),(0,r.jsxs)("header",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[(0,r.jsx)("h1",{className:a().className,children:"laulum.me"}),t&&(0,r.jsx)(y,{style:{padding:".5rem"},onClick:o,children:"⟳ Update"}),(0,r.jsx)(_.Z,{style:{marginLeft:"auto"}})]}),(0,r.jsxs)("main",{children:[(0,r.jsx)("form",{onSubmit:x,children:(0,r.jsx)(f,{placeholder:"Type song name and press enter/submit",value:s,onChange:p})}),(0,r.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"1rem",alignItems:"center"},children:g.map(e=>{let{title:n,slug:t,score:o}=e;return(0,r.jsx)(d.r,{href:"/songs/".concat(t),style:{width:"100%",opacity:Math.max(o,20)/100},children:n},n)})})]}),(0,r.jsx)("footer",{style:{marginBlock:"2rem",textAlign:"center"},children:(0,r.jsx)(d.r,{href:"https://github.com/TKOaly/laulum.me",variant:"primary",target:"_blank",rel:"noreferrer noopener",children:"Contribute a song on GitHub"})})]})};var w=!0,j=b},5254:function(e){e.exports={button:"Button_button__AxfIB",primary:"Button_primary__1n7q8",secondary:"Button_secondary__pRvhC"}},1587:function(e){e.exports={input:"Input_input__IL5XS"}},7427:function(e){e.exports={link:"Link_link__1By9V",primary:"Link_primary__sKzNq",secondary:"Link_secondary__benXC",telegram:"Link_telegram__k1B_r"}},8141:function(e){e.exports={logo:"Logo_logo__HEXJH"}}},function(e){e.O(0,[664,675,789,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);