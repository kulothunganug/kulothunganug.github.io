var w=Object.defineProperty,z=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var y=(e,t,n)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))v.call(t,n)&&y(e,n,t[n]);if(p)for(var n of p(t))C.call(t,n)&&y(e,n,t[n]);return e},g=(e,t)=>z(e,I(t));var x=(e,t)=>{var n={};for(var r in e)v.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&p)for(var r of p(e))t.indexOf(r)<0&&C.call(e,r)&&(n[r]=e[r]);return n};import{r as m,j as b,F as T,s as i,U as F,S as j,a as L,b as O,c as $,d as E,B as N,e as P,R as A,f as B}from"./vendor.6e837711.js";const H=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}};H();const R={backgroundColor:"#f5f5f5",textColor:"#000",oppTextColor:"#fff"},U={backgroundColor:"#000",textColor:"#fff",oppTextColor:"#000"};function M(e,t){const n=localStorage.getItem(e);return JSON.parse(n)||t}const J=(e,t)=>{const[n,r]=m.exports.useState(()=>M(e,t));return m.exports.useEffect(()=>{localStorage.setItem(e,JSON.stringify(n))},[e,n]),[n,r]},o=b.exports.jsx,l=b.exports.jsxs,S=m.exports.createContext(),K=()=>m.exports.useContext(S),_=({children:e})=>{const[t,n]=J("theme","dark"),r={theme:t,setTheme:n};return o(S.Provider,{value:r,children:o(T,{theme:t=="light"?R:U,children:e})})},G=()=>l(V,{children:[l(q,{children:["Hey there! ",o(Q,{children:"\u{1F44B}"}),","]}),o(W,{children:"I'm Kulothungan."})]}),V=i.div`
`,W=i.h1`
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
`,q=i.h2`
  font-size: 40px;
  margin: auto;

  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`,D=F`
  0% { transform: rotate( 0.0deg) }
  10% { transform: rotate(14.0deg) }
  20% { transform: rotate(-8.0deg) }
  30% { transform: rotate(14.0deg) }
  40% { transform: rotate(-4.0deg) }
  50% { transform: rotate(10.0deg) }
  60% { transform: rotate( 0.0deg) }
  100% { transform: rotate( 0.0deg) }
`,Q=i.span`
  animation-name: ${D};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
`,k=n=>{var r=n,{children:e}=r,t=x(r,["children"]);return o(Y,g(u({target:"_blank",rel:"noopener noreferrer"},t),{children:e}))},Y=i.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
`,Z=n=>{var r=n,{IconComponent:e}=r,t=x(r,["IconComponent"]);return o(X,g(u({},t),{children:e}))},X=i(k)`
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
`,d=25,ee=()=>l(te,{children:[o(oe,{children:"Find me on:"}),l(ne,{children:[o(h,{href:"https://discordapp.com/users/770868890737704979",hoverColor:"#5865F2",IconComponent:o(j,{size:d})}),o(h,{href:"https://github.com/Kulothungan16",hoverColor:"#181717",IconComponent:o(L,{size:d})}),o(h,{href:"https://www.instagram.com/kuloth.__.ungan",hoverColor:"#E4405F",IconComponent:o(O,{size:d})}),o(h,{href:"mailto:kulothunganug@gmail.com",hoverColor:"#EA4335",IconComponent:o($,{size:d})}),o(h,{href:"https://www.youtube.com/channel/UCPFVA4ruEe3QOtTfxEGpqrg",hoverColor:"#FF0000",IconComponent:o(E,{size:d})})]})]}),oe=i.p`
  margin-bottom: 10px;
`,te=i.div`
  position: fixed;
  bottom: 30px;
`,h=i(Z)`
  margin-right: 7px;
`,ne=i.div`
  display: flex;
  flex-direction: row;
`,re=()=>l(ie,{children:[o(se,{children:"a self-taught developer seeking to learn new things."}),l(ae,{children:[o(c,{href:"https://www.python.org/",children:"Python"}),o(c,{href:"https://kivy.org/",children:"Kivy"}),o(c,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",children:"JavaScript"}),o(c,{href:"https://developer.mozilla.org/en-US/docs/Web/css",children:"CSS"}),o(c,{href:"https://developer.mozilla.org/en-US/docs/Web/html",children:"HTML"}),o(c,{href:"https://reactjs.org/",children:"React"}),o(c,{href:"https://reactnative.dev/",children:"React Native"}),o(c,{href:"https://firebase.google.com/",children:"Firebase"})]})]}),ie=i.div``,se=i.p`
  font-size: 20px;
  margin: auto;

  @media only screen and (max-width: 600px) {
    font-size: 17px;
  }
`,c=i(k)`
  font-size: 15px;
  background-color: crimson;
  border-radius: 5px;
  padding: 5px;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
  }
`,ae=i.div`
  margin-top: 20px;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`,ce=()=>{const{theme:e,setTheme:t}=K();return o("div",{children:l(le,{children:[o(de,{children:e=="light"?o(N,{size:28,onClick:()=>t(e=="dark"?"light":"dark")}):o(P,{size:25,onClick:()=>t(e=="dark"?"light":"dark")})}),o(G,{}),o(re,{}),o(ee,{})]})})},le=i.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: ${e=>e.theme.textColor};
  background: ${e=>e.theme.backgroundColor};
  padding: 100px 0 0 100px;

  @media only screen and (max-width: 600px) {
    padding: 50px 0 0 30px;
  }
`,de=i.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 40px;
  cursor: pointer;
  position: fixed;
  right: 100px;

  @media only screen and (max-width: 600px) {
    right: -10px;
  }
`,he=()=>o(_,{children:o(ce,{})});A.render(o(B.StrictMode,{children:o(he,{})}),document.getElementById("root"));
