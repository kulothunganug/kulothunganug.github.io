var k=Object.defineProperty,w=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var y=(e,o,n)=>o in e?k(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,u=(e,o)=>{for(var n in o||(o={}))x.call(o,n)&&y(e,n,o[n]);if(m)for(var n of m(o))C.call(o,n)&&y(e,n,o[n]);return e},f=(e,o)=>w(e,S(o));var g=(e,o)=>{var n={};for(var r in e)x.call(e,r)&&o.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&m)for(var r of m(e))o.indexOf(r)<0&&C.call(e,r)&&(n[r]=e[r]);return n};import{r as h,j as v,F as I,s,U as z,S as F,a as T,b as j,c as L,d as O,B as E,e as $,R as A,f as B}from"./vendor.6e837711.js";const N=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const p of a.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}};N();const P={backgroundColor:"#f5f5f5",textColor:"#000",oppTextColor:"#fff"},H={backgroundColor:"#000",textColor:"#fff",oppTextColor:"#000"};function M(e,o){const n=localStorage.getItem(e);return JSON.parse(n)||o}const R=(e,o)=>{const[n,r]=h.exports.useState(()=>M(e,o));return h.exports.useEffect(()=>{localStorage.setItem(e,JSON.stringify(n))},[e,n]),[n,r]},t=v.exports.jsx,c=v.exports.jsxs,b=h.exports.createContext(),_=()=>h.exports.useContext(b),G=({children:e})=>{const[o,n]=R("theme","dark"),r={theme:o,setTheme:n};return t(b.Provider,{value:r,children:t(I,{theme:o=="light"?P:H,children:e})})},K=()=>c(U,{children:[c(q,{children:["Hey there! ",t(Q,{children:"\u{1F44B}"}),","]}),t(V,{children:"I'm Kulothungan."}),t(D,{children:"a self-taught developer seeking to learn new things."})]}),U=s.div``,V=s.h1`
  font-size: 90px;
  font-family: 'Arvo', serif;
  font-weight: bold;
  transition: color 0.25s ease-in;
  display: inline-block;
  margin: auto;

  &:hover {
    color: dodgerblue;
  }

  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`,q=s.h2`
  font-size: 40px;
  margin: auto;
  transition: color 0.25s ease-in;

  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`,D=s.p`
  font-size: 20px;
  margin: auto;
  transition: color 0.25s ease-in;

  @media only screen and (max-width: 600px) {
    font-size: 17px;
  }
`,J=z`
  0% { transform: rotate( 0.0deg) }
  10% { transform: rotate(14.0deg) }
  20% { transform: rotate(-8.0deg) }
  30% { transform: rotate(14.0deg) }
  40% { transform: rotate(-4.0deg) }
  50% { transform: rotate(10.0deg) }
  60% { transform: rotate( 0.0deg) }
  100% { transform: rotate( 0.0deg) }
`,Q=s.span`
  animation-name: ${J};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
`,Y=n=>{var r=n,{children:e}=r,o=g(r,["children"]);return t(Z,f(u({target:"_blank",rel:"noopener noreferrer"},o),{children:e}))},Z=s.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
`,W=n=>{var r=n,{IconComponent:e}=r,o=g(r,["IconComponent"]);return t(X,f(u({},o),{children:e}))},X=s(Y)`
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
`,l=25,ee=()=>c(te,{children:[t(oe,{children:"Find me on:"}),c(ne,{children:[t(d,{href:"https://discordapp.com/users/770868890737704979",hoverColor:"#5865F2",IconComponent:t(F,{size:l})}),t(d,{href:"https://github.com/Kulothungan16",hoverColor:"#181717",IconComponent:t(T,{size:l})}),t(d,{href:"https://www.instagram.com/kuloth.__.ungan",hoverColor:"#E4405F",IconComponent:t(j,{size:l})}),t(d,{href:"mailto:kulothunganug@gmail.com",hoverColor:"#EA4335",IconComponent:t(L,{size:l})}),t(d,{href:"https://www.youtube.com/channel/UCPFVA4ruEe3QOtTfxEGpqrg",hoverColor:"#FF0000",IconComponent:t(O,{size:l})})]})]}),oe=s.p`
  margin-bottom: 10px;
  transition: color 0.25s ease-in;
`,te=s.div`
  position: fixed;
  bottom: 30px;
`,d=s(W)`
  margin-right: 7px;
`,ne=s.div`
  display: flex;
  flex-direction: row;
`,re=()=>{const{theme:e,setTheme:o}=_();return c(ie,{children:[t(K,{}),t(ee,{}),t(se,{children:e=="light"?t(E,{size:28,onClick:()=>o(e=="dark"?"light":"dark")}):t($,{size:25,onClick:()=>o(e=="dark"?"light":"dark")})})]})},ie=s.div`
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
`,se=s.div`
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
`,ae=()=>t(G,{children:t(re,{})});A.render(t(B.StrictMode,{children:t(ae,{})}),document.getElementById("root"));
