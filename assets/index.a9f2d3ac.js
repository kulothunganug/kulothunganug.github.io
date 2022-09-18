var T=Object.defineProperty,z=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var S=(e,t,o)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,f=(e,t)=>{for(var o in t||(t={}))y.call(t,o)&&S(e,o,t[o]);if(p)for(var o of p(t))v.call(t,o)&&S(e,o,t[o]);return e},g=(e,t)=>z(e,F(t));var x=(e,t)=>{var o={};for(var n in e)y.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&p)for(var n of p(e))t.indexOf(n)<0&&v.call(e,n)&&(o[n]=e[n]);return o};import{r as d,j as w,F as O,s as a,T as $,U as j,S as E,a as L,b as A,c as B,d as M,B as N,e as R,R as P,f as G}from"./vendor.7ab1d151.js";const H=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=o(i);fetch(i.href,s)}};H();const C={backgroundColor:"#ececec",textColor:"#000",oppTextColor:"#fff",primaryColor:"#1e90ff"},k=g(f({},C),{backgroundColor:"#111",textColor:"#fff",oppTextColor:"#000"});function _(e,t){const o=localStorage.getItem(e);return JSON.parse(o)||t}const q=(e,t)=>{const[o,n]=d.exports.useState(()=>_(e,t));return d.exports.useEffect(()=>{localStorage.setItem(e,JSON.stringify(o))},[e,o]),[o,n]},r=w.exports.jsx,m=w.exports.jsxs,I=d.exports.createContext(),D=()=>d.exports.useContext(I),J=({children:e})=>{const[t,o]=q("theme","dark"),n=()=>t=="light"?C:k,i=()=>{o(l=>l=="dark"?"light":"dark")},s=l=>{document.querySelector('meta[name="theme-color"]').setAttribute("content",l)};d.exports.useEffect(()=>{let l=n();s(l.backgroundColor)},[t]);const c={theme:t,toggleTheme:i};return r(I.Provider,{value:c,children:r(O,{theme:t=="light"?C:k,children:e})})},K=o=>{var n=o,{children:e}=n,t=x(n,["children"]);return r(U,g(f({target:"_blank",rel:"noopener noreferrer"},t),{children:e}))},U=a.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
`,V=o=>{var n=o,{IconComponent:e}=n,t=x(n,["IconComponent"]);return r(Y,g(f({},t),{children:e}))},Y=a(K)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 0.25s ease-in;
  color: ${e=>e.theme.textColor};

  &:hover {
    background-color: ${e=>e.hoverColor};
    color: white;
    transform: scale(1.1);
  }
`,Q=({strings:e,typeSpeed:t=50,backSpeed:o=50,loop:n=!0,smartBackspace:i=!0,className:s})=>{const c=d.exports.useRef(null),l=d.exports.useRef(null);return d.exports.useEffect(()=>{const b={strings:e,typeSpeed:t,backSpeed:o,loop:n,smartBackspace:i};return l.current=new $(c.current,b),()=>{l.current.destroy()}},[]),r(Z,{className:s,children:r(W,{ref:c})})},Z=a.div``,W=a.span`
  whitespace: pre;
`,X=()=>m(ee,{children:[m(oe,{children:["Hey there! ",r(ne,{children:"\u{1F44B}"}),","]}),r(te,{strings:["I'm Kulothungan.","I'm a student.","I'm a self-taught developer."]})]}),ee=a.div``,te=a(Q)`
  font-size: 90px;
  font-family: 'Arvo', serif;
  font-weight: bold;
  transition: color 0.25s ease-in;
  display: inline-block;
  overflow: auto;

  &:hover {
    color: ${e=>e.theme.primaryColor};
  }

  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`,oe=a.h2`
  font-size: 40px;
  transition: color 0.25s ease-in;

  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`,re=j`
  0% { transform: rotate( 0.0deg) }
  10% { transform: rotate(14.0deg) }
  20% { transform: rotate(-8.0deg) }
  30% { transform: rotate(14.0deg) }
  40% { transform: rotate(-4.0deg) }
  50% { transform: rotate(10.0deg) }
  60% { transform: rotate( 0.0deg) }
  100% { transform: rotate( 0.0deg) }
`,ne=a.span`
  animation-name: ${re};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
`,u=25,ie=()=>m(ae,{children:[r(se,{children:"Find me on:"}),m(ce,{children:[r(h,{href:"https://discordapp.com/users/770868890737704979",hoverColor:"#5865F2",IconComponent:r(E,{size:u}),"aria-label":"Discord"}),r(h,{href:"https://github.com/Kulothungan16",hoverColor:"#181717",IconComponent:r(L,{size:u}),"aria-label":"Github"}),r(h,{href:"https://www.instagram.com/kuloth.__.ungan",hoverColor:"#E4405F",IconComponent:r(A,{size:u}),"aria-label":"Instagram"}),r(h,{href:"mailto:kulothunganug@gmail.com",hoverColor:"#EA4335",IconComponent:r(B,{size:u}),"aria-label":"Mail"}),r(h,{href:"https://www.youtube.com/channel/UCPFVA4ruEe3QOtTfxEGpqrg",hoverColor:"#FF0000",IconComponent:r(M,{size:u}),"aria-label":"Youtube"})]})]}),se=a.p`
  margin-bottom: 10px;
`,ae=a.div`
  position: fixed;
  bottom: 30px;
`,h=a(V)`
  margin-right: 7px;
`,ce=a.div`
  display: flex;
  flex-direction: row;
`,le=()=>{const{theme:e,toggleTheme:t}=D();return m(de,{children:[r(X,{}),r(ie,{}),r(me,{children:e=="light"?r(N,{size:28,onClick:t}):r(R,{size:25,onClick:t})})]})},de=a.div`
  height: 100vh;
  padding: 100px 0 0 100px;
  color: ${e=>e.theme.textColor};
  background-color: ${e=>e.theme.backgroundColor};
  transition: all 0.25s ease-in;

  @media only screen and (max-width: 600px) {
    padding: 50px 0 0 30px;
  }
`,me=a.div`
  margin-right: 40px;
  cursor: pointer;
  position: fixed;
  right: 100px;
  bottom: 50px;

  @media only screen and (max-width: 600px) {
    right: 0px;
    bottom: 60px;
  }
`,ue=()=>r(J,{children:r(le,{})});P.render(r(G.StrictMode,{children:r(ue,{})}),document.getElementById("root"));
