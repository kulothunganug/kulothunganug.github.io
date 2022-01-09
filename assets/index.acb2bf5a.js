var T=Object.defineProperty,z=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var w=(e,t,n)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))y.call(t,n)&&w(e,n,t[n]);if(h)for(var n of h(t))v.call(t,n)&&w(e,n,t[n]);return e},g=(e,t)=>z(e,F(t));var x=(e,t)=>{var n={};for(var r in e)y.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&h)for(var r of h(e))t.indexOf(r)<0&&v.call(e,r)&&(n[r]=e[r]);return n};import{r as d,j as S,F as O,s as a,T as $,U as j,S as E,a as L,b as A,c as B,d as M,B as N,e as P,R,f as G}from"./vendor.4b46669d.js";const H=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};H();const C={backgroundColor:"#ececec",textColor:"#000",oppTextColor:"#fff",primaryColor:"#1e90ff"},k=g(f({},C),{backgroundColor:"#111",textColor:"#fff",oppTextColor:"#000"});function J(e,t){const n=localStorage.getItem(e);return JSON.parse(n)||t}const _=(e,t)=>{const[n,r]=d.exports.useState(()=>J(e,t));return d.exports.useEffect(()=>{localStorage.setItem(e,JSON.stringify(n))},[e,n]),[n,r]},o=S.exports.jsx,m=S.exports.jsxs,I=d.exports.createContext(),q=()=>d.exports.useContext(I),D=({children:e})=>{const[t,n]=_("theme","dark"),r=()=>t=="light"?C:k,i=()=>{n(l=>l=="dark"?"light":"dark")},s=l=>{document.querySelector('meta[name="theme-color"]').setAttribute("content",l)};d.exports.useEffect(()=>{let l=r();s(l.backgroundColor)},[t]);const c={theme:t,toggleTheme:i};return o(I.Provider,{value:c,children:o(O,{theme:t=="light"?C:k,children:e})})},K=n=>{var r=n,{children:e}=r,t=x(r,["children"]);return o(U,g(f({target:"_blank",rel:"noopener noreferrer"},t),{children:e}))},U=a.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
`,V=n=>{var r=n,{IconComponent:e}=r,t=x(r,["IconComponent"]);return o(Y,g(f({},t),{children:e}))},Y=a(K)`
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
`,Q=({strings:e,typeSpeed:t=50,backSpeed:n=50,loop:r=!0,smartBackspace:i=!0,className:s})=>{const c=d.exports.useRef(null),l=d.exports.useRef(null);return d.exports.useEffect(()=>{const b={strings:e,typeSpeed:t,backSpeed:n,loop:r,smartBackspace:i};return l.current=new $(c.current,b),()=>{l.current.destroy()}},[]),o(Z,{className:s,children:o(W,{ref:c})})},Z=a.div``,W=a.span`
  whitespace: pre;
`,X=()=>m(ee,{children:[m(oe,{children:["Hey there! ",o(ie,{children:"\u{1F44B}"}),","]}),o(te,{strings:["I'm Kulothungan.","I'm a student.","I'm a python programmer.","I'm a Javascript developer."]}),o(ne,{children:"a self-taught developer seeking to learn new things."})]}),ee=a.div``,te=a(Q)`
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
`,ne=a.p`
  font-size: 20px;
  transition: color 0.25s ease-in;

  @media only screen and (max-width: 600px) {
    font-size: 17px;
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
`,ie=a.span`
  animation-name: ${re};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
`,p=25,se=()=>m(ce,{children:[o(ae,{children:"Find me on:"}),m(le,{children:[o(u,{href:"https://discordapp.com/users/770868890737704979",hoverColor:"#5865F2",IconComponent:o(E,{size:p}),"aria-label":"Discord"}),o(u,{href:"https://github.com/Kulothungan16",hoverColor:"#181717",IconComponent:o(L,{size:p}),"aria-label":"Github"}),o(u,{href:"https://www.instagram.com/kuloth.__.ungan",hoverColor:"#E4405F",IconComponent:o(A,{size:p}),"aria-label":"Instagram"}),o(u,{href:"mailto:kulothunganug@gmail.com",hoverColor:"#EA4335",IconComponent:o(B,{size:p}),"aria-label":"Mail"}),o(u,{href:"https://www.youtube.com/channel/UCPFVA4ruEe3QOtTfxEGpqrg",hoverColor:"#FF0000",IconComponent:o(M,{size:p}),"aria-label":"Youtube"})]})]}),ae=a.p`
  margin-bottom: 10px;
  transition: color 0.25s ease-in;
`,ce=a.div`
  position: fixed;
  bottom: 30px;
`,u=a(V)`
  margin-right: 7px;
`,le=a.div`
  display: flex;
  flex-direction: row;
`,de=()=>{const{theme:e,toggleTheme:t}=q();return m(me,{children:[o(X,{}),o(se,{}),o(pe,{children:e=="light"?o(N,{size:28,onClick:t}):o(P,{size:25,onClick:t})})]})},me=a.div`
  height: 100vh;
  padding: 100px 0 0 100px;
  color: ${e=>e.theme.textColor};
  background-color: ${e=>e.theme.backgroundColor};
  transition: all 0.25s ease-in;

  @media only screen and (max-width: 600px) {
    padding: 50px 0 0 30px;
  }
`,pe=a.div`
  margin-right: 40px;
  cursor: pointer;
  position: fixed;
  right: 100px;
  bottom: 50px;

  @media only screen and (max-width: 600px) {
    right: 0px;
    bottom: 60px;
  }
`,ue=()=>o(D,{children:o(de,{})});R.render(o(G.StrictMode,{children:o(ue,{})}),document.getElementById("root"));
