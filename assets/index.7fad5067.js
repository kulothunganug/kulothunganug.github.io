var C=Object.defineProperty,z=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var y=(o,t,n)=>t in o?C(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n,f=(o,t)=>{for(var n in t||(t={}))x.call(t,n)&&y(o,n,t[n]);if(p)for(var n of p(t))v.call(t,n)&&y(o,n,t[n]);return o},g=(o,t)=>z(o,k(t));var u=(o,t)=>{var n={};for(var r in o)x.call(o,r)&&t.indexOf(r)<0&&(n[r]=o[r]);if(o!=null&&p)for(var r of p(o))t.indexOf(r)<0&&v.call(o,r)&&(n[r]=o[r]);return n};import{j as w,s,U as I,D as j,G as S,I as F,a as L,Y as E,R as O,b as R}from"./vendor.db0e1d3e.js";const A=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const m of a.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}};A();const e=w.exports.jsx,d=w.exports.jsxs,N=()=>d(P,{children:[d($,{children:["Hey there! ",e(G,{children:"\u{1F44B}"}),","]}),e(U,{children:"I'm Kulothungan."})]}),P=s.div``,U=s.h1`
  font-size: 90px;
  font-family: 'Arvo', serif;
  font-weight: bold;
  display: inline-block;
  transition: color 0.25s ease-in;

  &:hover {
    color: dodgerblue;
  }

  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`,$=s.h2`
  font-size: 40px;

  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`,H=I`
  0% { transform: rotate( 0.0deg) }
  10% { transform: rotate(14.0deg) }
  20% { transform: rotate(-8.0deg) }
  30% { transform: rotate(14.0deg) }
  40% { transform: rotate(-4.0deg) }
  50% { transform: rotate(10.0deg) }
  60% { transform: rotate( 0.0deg) }
  100% { transform: rotate( 0.0deg) }
`,G=s.span`
  animation-name: ${H}; /* Refers to the name of your @keyframes element below */
  animation-duration: 2.5s; /* Change to speed up or slow down */
  animation-iteration-count: infinite; /* Never stop waving :) */
  transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
  display: inline-block;
`,b=n=>{var r=n,{children:o}=r,t=u(r,["children"]);return e(K,g(f({target:"_blank",rel:"noopener noreferrer"},t),{children:o}))},K=s.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
`,M=n=>{var r=n,{IconComponent:o}=r,t=u(r,["IconComponent"]);return e(T,g(f({},t),{children:o}))},T=s(b)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 0.25s ease-in;

  &:hover {
    background-color: ${o=>o.hoverColor};
    transform: scale(1.1);
  }
`,l=25,_=()=>d(D,{children:[e(B,{children:"Find me on:"}),d(W,{children:[e(h,{href:"https://discordapp.com/users/770868890737704979",hoverColor:"#5865F2",IconComponent:e(j,{size:l})}),e(h,{href:"https://github.com/Kulothungan16",hoverColor:"#181717",IconComponent:e(S,{size:l})}),e(h,{href:"https://www.instagram.com/kuloth.__.ungan",hoverColor:"#E4405F",IconComponent:e(F,{size:l})}),e(h,{href:"mailto:kulothunganug@gmail.com",hoverColor:"#EA4335",IconComponent:e(L,{size:l})}),e(h,{href:"https://www.youtube.com/channel/UCPFVA4ruEe3QOtTfxEGpqrg",hoverColor:"#FF0000",IconComponent:e(E,{size:l})})]})]}),B=s.p`
  margin-bottom: 10px;
`,D=s.div`
  position: fixed;
  bottom: 30px;
`,h=s(M)`
  margin-right: 7px;
`,W=s.div`
  display: flex;
  flex-direction: row;
`,q=()=>d(J,{children:[e(Y,{children:"a self-taught developer seeking to learn new things."}),d(Q,{children:[e(c,{href:"https://www.python.org/",children:"Python"}),e(c,{href:"https://kivy.org/",children:"Kivy"}),e(c,{href:"https://www.djangoproject.com/",children:"django"}),e(c,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",children:"JavaScript"}),e(c,{href:"https://developer.mozilla.org/en-US/docs/Web/css",children:"CSS"}),e(c,{href:"https://developer.mozilla.org/en-US/docs/Web/html",children:"HTML"}),e(c,{href:"https://reactjs.org/",children:"React"}),e(c,{href:"https://reactnative.dev/",children:"React Native"}),e(c,{href:"https://firebase.google.com/",children:"Firebase"})]})]}),J=s.div``,Y=s.p`
  font-size: 20px;

  @media only screen and (max-width: 600px) {
    font-size: 17px;
  }
`,c=s(b)`
  font-size: 15px;
  background-color: crimson;
  border-radius: 5px;
  padding: 5px;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
  }
`,Q=s.div`
  margin-top: 20px;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`,V=()=>d(Z,{children:[e(N,{}),e(q,{}),e(_,{})]}),Z=s.div`
  padding: 150px;

  @media only screen and (max-width: 600px) {
    padding: 150px 0 0 40px;
  }
`;O.render(e(R.StrictMode,{children:e(V,{})}),document.getElementById("root"));
