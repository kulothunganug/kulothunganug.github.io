var e=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,a=(r,o,n)=>o in r?e(r,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[o]=n,l=(e,r)=>{for(var o in r||(r={}))t.call(r,o)&&a(e,o,r[o]);if(n)for(var o of n(r))i.call(r,o)&&a(e,o,r[o]);return e},s=(e,n)=>r(e,o(n)),d=(e,r)=>{var o={};for(var a in e)t.call(e,a)&&r.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&n)for(var a of n(e))r.indexOf(a)<0&&i.call(e,a)&&(o[a]=e[a]);return o};import{j as c,s as p,U as h,D as f,G as m,I as g,a as u,Y as b,R as v,b as x}from"./vendor.2e73c668.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?r.credentials="include":"anonymous"===e.crossorigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();const y=c.exports.jsx,w=c.exports.jsxs,C=()=>w(j,{children:[w(I,{children:["Hey there! ",y(k,{children:"👋"}),","]}),y(z,{children:"I'm Kulothungan."})]}),j=p.div``,z=p.h1`
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
`,I=p.h2`
  font-size: 40px;

  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`,O=h`
  0% { transform: rotate( 0.0deg) }
  10% { transform: rotate(14.0deg) }
  20% { transform: rotate(-8.0deg) }
  30% { transform: rotate(14.0deg) }
  40% { transform: rotate(-4.0deg) }
  50% { transform: rotate(10.0deg) }
  60% { transform: rotate( 0.0deg) }
  100% { transform: rotate( 0.0deg) }
`,k=p.span`
  animation-name: ${O}; /* Refers to the name of your @keyframes element below */
  animation-duration: 2.5s; /* Change to speed up or slow down */
  animation-iteration-count: infinite; /* Never stop waving :) */
  transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
  display: inline-block;
`,S=e=>{var r=e,{children:o}=r,n=d(r,["children"]);return y(P,s(l({target:"_blank",rel:"noopener noreferrer"},n),{children:o}))},P=p.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
`,E=p(S)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 0.25s ease-in;

  &:hover {
    background-color: ${e=>e.hoverColor};
    transform: scale(1.1);
  }
`,F=()=>w(N,{children:[y(L,{children:"Find me on:"}),w(A,{children:[y(U,{"aria-label":"Discord",href:"https://discordapp.com/users/770868890737704979",hoverColor:"#5865F2",IconComponent:y(f,{size:25})}),y(U,{"aria-label":"GitHub",href:"https://github.com/Kulothungan16",hoverColor:"#181717",IconComponent:y(m,{size:25})}),y(U,{"aria-label":"Instagram",href:"https://www.instagram.com/kuloth.__.ungan",hoverColor:"#E4405F",IconComponent:y(g,{size:25})}),y(U,{"aria-label":"Mail",href:"mailto:kulothunganug@gmail.com",hoverColor:"#EA4335",IconComponent:y(u,{size:25})}),y(U,{"aria-label":"YouTube",href:"https://www.youtube.com/channel/UCPFVA4ruEe3QOtTfxEGpqrg",hoverColor:"#FF0000",IconComponent:y(b,{size:25})})]})]}),L=p.p`
  margin-bottom: 10px;
`,N=p.div`
  position: fixed;
  bottom: 30px;
`,U=p((e=>{var r=e,{IconComponent:o}=r,n=d(r,["IconComponent"]);return y(E,s(l({},n),{children:o}))}))`
  margin-right: 7px;
`,A=p.div`
  display: flex;
  flex-direction: row;
`,K=()=>w(M,{children:[y(R,{children:"a self-taught developer seeking to learn new things."}),w(G,{children:[y(D,{href:"https://www.python.org/",children:"Python"}),y(D,{href:"https://kivy.org/",children:"Kivy"}),y(D,{href:"https://www.djangoproject.com/",children:"django"}),y(D,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",children:"JavaScript"}),y(D,{href:"https://developer.mozilla.org/en-US/docs/Web/css",children:"CSS"}),y(D,{href:"https://developer.mozilla.org/en-US/docs/Web/html",children:"HTML"}),y(D,{href:"https://reactjs.org/",children:"React"}),y(D,{href:"https://reactnative.dev/",children:"React Native"}),y(D,{href:"https://firebase.google.com/",children:"Firebase"})]})]}),M=p.div``,R=p.p`
  font-size: 20px;

  @media only screen and (max-width: 600px) {
    font-size: 17px;
  }
`,D=p(S)`
  font-size: 15px;
  background-color: crimson;
  border-radius: 5px;
  padding: 5px;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
  }
`,G=p.div`
  margin-top: 20px;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`,H=()=>w(T,{children:[y(C,{}),y(K,{}),y(F,{})]}),T=p.div`
  padding: 150px;

  @media only screen and (max-width: 600px) {
    padding: 150px 0 0 40px;
  }
`;v.render(y(x.StrictMode,{children:y(H,{})}),document.getElementById("root"));
