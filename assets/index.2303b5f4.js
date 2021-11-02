var I=Object.defineProperty,z=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var b=(e,o,n)=>o in e?I(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,p=(e,o)=>{for(var n in o||(o={}))y.call(o,n)&&b(e,n,o[n]);if(f)for(var n of f(o))v.call(o,n)&&b(e,n,o[n]);return e},u=(e,o)=>z(e,T(o));var x=(e,o)=>{var n={};for(var r in e)y.call(e,r)&&o.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&f)for(var r of f(e))o.indexOf(r)<0&&v.call(e,r)&&(n[r]=e[r]);return n};import{r as l,j as k,F,s as a,U as j,S as E,a as L,b as O,c as $,d as A,B,e as N,R as P,f as M}from"./vendor.fb3efe66.js";const H=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};H();const C={backgroundColor:"#f5f5f5",textColor:"#000",oppTextColor:"#fff",primaryColor:"#1e90ff"},S=u(p({},C),{backgroundColor:"#000",textColor:"#fff",oppTextColor:"#000"});function R(e,o){const n=localStorage.getItem(e);return JSON.parse(n)||o}const _=(e,o)=>{const[n,r]=l.exports.useState(()=>R(e,o));return l.exports.useEffect(()=>{localStorage.setItem(e,JSON.stringify(n))},[e,n]),[n,r]},t=k.exports.jsx,d=k.exports.jsxs,w=l.exports.createContext(),q=()=>l.exports.useContext(w),D=({children:e})=>{const[o,n]=_("theme","dark"),r=()=>o=="light"?C:S,i=()=>{n(g=>g=="dark"?"light":"dark")},s=g=>{document.querySelector('meta[name="theme-color"]').setAttribute("content",g)};l.exports.useEffect(()=>{s(r().backgroundColor)},[o]);const c={theme:o,toggleTheme:i};return t(w.Provider,{value:c,children:t(F,{theme:o=="light"?C:S,children:e})})},G=()=>d(K,{children:[d(V,{children:["Hey there! ",t(Y,{children:"\u{1F44B}"}),","]}),t(U,{children:"I'm Kulothungan."}),t(J,{children:"a self-taught developer seeking to learn new things."})]}),K=a.div``,U=a.h1`
  font-size: 90px;
  font-family: 'Arvo', serif;
  font-weight: bold;
  transition: color 0.25s ease-in;
  display: inline-block;

  &:hover {
    color: ${e=>e.theme.primaryColor};
  }

  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`,V=a.h2`
  font-size: 40px;
  transition: color 0.25s ease-in;

  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`,J=a.p`
  font-size: 20px;
  transition: color 0.25s ease-in;

  @media only screen and (max-width: 600px) {
    font-size: 17px;
  }
`,Q=j`
  0% { transform: rotate( 0.0deg) }
  10% { transform: rotate(14.0deg) }
  20% { transform: rotate(-8.0deg) }
  30% { transform: rotate(14.0deg) }
  40% { transform: rotate(-4.0deg) }
  50% { transform: rotate(10.0deg) }
  60% { transform: rotate( 0.0deg) }
  100% { transform: rotate( 0.0deg) }
`,Y=a.span`
  animation-name: ${Q};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
`,Z=n=>{var r=n,{children:e}=r,o=x(r,["children"]);return t(W,u(p({target:"_blank",rel:"noopener noreferrer"},o),{children:e}))},W=a.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
`,X=n=>{var r=n,{IconComponent:e}=r,o=x(r,["IconComponent"]);return t(ee,u(p({},o),{children:e}))},ee=a(Z)`
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
`,m=25,oe=()=>d(ne,{children:[t(te,{children:"Find me on:"}),d(re,{children:[t(h,{href:"https://discordapp.com/users/770868890737704979",hoverColor:"#5865F2",IconComponent:t(E,{size:m})}),t(h,{href:"https://github.com/Kulothungan16",hoverColor:"#181717",IconComponent:t(L,{size:m})}),t(h,{href:"https://www.instagram.com/kuloth.__.ungan",hoverColor:"#E4405F",IconComponent:t(O,{size:m})}),t(h,{href:"mailto:kulothunganug@gmail.com",hoverColor:"#EA4335",IconComponent:t($,{size:m})}),t(h,{href:"https://www.youtube.com/channel/UCPFVA4ruEe3QOtTfxEGpqrg",hoverColor:"#FF0000",IconComponent:t(A,{size:m})})]})]}),te=a.p`
  margin-bottom: 10px;
  transition: color 0.25s ease-in;
`,ne=a.div`
  position: fixed;
  bottom: 30px;
`,h=a(X)`
  margin-right: 7px;
`,re=a.div`
  display: flex;
  flex-direction: row;
`,ie=()=>{const{theme:e,toggleTheme:o}=q();return d(se,{children:[t(G,{}),t(oe,{}),t(ae,{children:e=="light"?t(B,{size:28,onClick:o}):t(N,{size:25,onClick:o})})]})},se=a.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 100px 0 0 100px;
  color: ${e=>e.theme.textColor};
  background-color: ${e=>e.theme.backgroundColor};
  transition: all 0.25s ease-in;

  @media only screen and (max-width: 600px) {
    padding: 50px 0 0 30px;
  }
`,ae=a.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 40px;
  cursor: pointer;
  position: fixed;
  right: 100px;
  bottom: 50px;

  @media only screen and (max-width: 600px) {
    right: 0px;
    bottom: 60px;
  }
`,ce=()=>t(D,{children:t(ie,{})});P.render(t(M.StrictMode,{children:t(ce,{})}),document.getElementById("root"));
