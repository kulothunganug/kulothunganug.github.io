var e=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,a=(r,o,t)=>o in r?e(r,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[o]=t;import{j as s,s as l,U as d,D as c,G as p,I as h,a as f,Y as m,R as g,b as u}from"./vendor.2e73c668.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?r.credentials="include":"anonymous"===e.crossorigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();const v=s.exports.jsx,x=s.exports.jsxs,y=()=>x(b,{children:[x(C,{children:["Hey there! ",v(z,{children:"👋"}),","]}),v(w,{children:"I'm Kulothungan."})]}),b=l.div``,w=l.h1`
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
`,C=l.h2`
  font-size: 40px;

  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`,j=d`
  0% { transform: rotate( 0.0deg) }
  10% { transform: rotate(14.0deg) }
  20% { transform: rotate(-8.0deg) }
  30% { transform: rotate(14.0deg) }
  40% { transform: rotate(-4.0deg) }
  50% { transform: rotate(10.0deg) }
  60% { transform: rotate( 0.0deg) }
  100% { transform: rotate( 0.0deg) }
`,z=l.span`
  animation-name: ${j}; /* Refers to the name of your @keyframes element below */
  animation-duration: 2.5s; /* Change to speed up or slow down */
  animation-iteration-count: infinite; /* Never stop waving :) */
  transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
  display: inline-block;
`,O=e=>{var s,l=e,{children:d}=l,c=((e,r)=>{var o={};for(var a in e)n.call(e,a)&&r.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&t)for(var a of t(e))r.indexOf(a)<0&&i.call(e,a)&&(o[a]=e[a]);return o})(l,["children"]);return v(k,(s=((e,r)=>{for(var o in r||(r={}))n.call(r,o)&&a(e,o,r[o]);if(t)for(var o of t(r))i.call(r,o)&&a(e,o,r[o]);return e})({target:"_blank",rel:"noopener noreferrer"},c),r(s,o({children:d}))))},k=l.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
`,I=l(O)`
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
`,S=()=>x(E,{children:[v(P,{children:"Find me on:"}),x(N,{children:[v(F,{href:"https://discordapp.com/users/770868890737704979",hoverColor:"#5865F2",IconComponent:v(c,{size:25})}),v(F,{href:"https://github.com/Kulothungan16",hoverColor:"#181717",IconComponent:v(p,{size:25})}),v(F,{href:"https://www.instagram.com/kuloth.__.ungan",hoverColor:"#E4405F",IconComponent:v(h,{size:25})}),v(F,{href:"mailto:kulothunganug@gmail.com",hoverColor:"#EA4335",IconComponent:v(f,{size:25})}),v(F,{href:"https://www.youtube.com/channel/UCPFVA4ruEe3QOtTfxEGpqrg",hoverColor:"#FF0000",IconComponent:v(m,{size:25})})]})]}),P=l.p`
  margin-bottom: 10px;
`,E=l.div`
  position: fixed;
  bottom: 30px;
`,F=l((({href:e,hoverColor:r,className:o,IconComponent:t})=>v(I,{href:e,hoverColor:r,className:o,children:t})))`
  margin-right: 7px;
`,N=l.div`
  display: flex;
  flex-direction: row;
`,L=()=>x(U,{children:[v(A,{children:"a self-taught developer seeking to learn new things."}),x(R,{children:[v(K,{href:"https://www.python.org/",children:"Python"}),v(K,{href:"https://kivy.org/",children:"Kivy"}),v(K,{href:"https://www.djangoproject.com/",children:"django"}),v(K,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",children:"JavaScript"}),v(K,{href:"https://developer.mozilla.org/en-US/docs/Web/css",children:"CSS"}),v(K,{href:"https://developer.mozilla.org/en-US/docs/Web/html",children:"HTML"}),v(K,{href:"https://reactjs.org/",children:"React"}),v(K,{href:"https://reactnative.dev/",children:"React Native"}),v(K,{href:"https://firebase.google.com/",children:"Firebase"})]})]}),U=l.div``,A=l.p`
  font-size: 20px;

  @media only screen and (max-width: 600px) {
    font-size: 17px;
  }
`,K=l(O)`
  font-size: 15px;
  background-color: crimson;
  border-radius: 5px;
  padding: 5px;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
  }
`,R=l.div`
  margin-top: 20px;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`,M=()=>x(W,{children:[v(y,{}),v(L,{}),v(S,{})]}),W=l.div`
  padding: 150px;

  @media only screen and (max-width: 600px) {
    padding: 150px 0 0 40px;
  }
`;g.render(v(u.StrictMode,{children:v(M,{})}),document.getElementById("root"));
