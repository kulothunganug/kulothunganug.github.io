import{j as e,s as o,U as r,D as n,G as t,I as i,a,Y as s,R as d,b as l}from"./vendor.2e73c668.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&o(e)})).observe(document,{childList:!0,subtree:!0})}function o(e){if(e.ep)return;e.ep=!0;const o=function(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?o.credentials="include":"anonymous"===e.crossorigin?o.credentials="omit":o.credentials="same-origin",o}(e);fetch(e.href,o)}}();const c=e.exports.jsx,h=e.exports.jsxs,p=()=>h(m,{children:[h(g,{children:["Hey there! ",c(x,{children:"👋"}),","]}),c(f,{children:"I'm Kulothungan."})]}),m=o.div``,f=o.h1`
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
`,g=o.h2`
  font-size: 40px;

  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`,u=r`
  0% { transform: rotate( 0.0deg) }
  10% { transform: rotate(14.0deg) }
  20% { transform: rotate(-8.0deg) }
  30% { transform: rotate(14.0deg) }
  40% { transform: rotate(-4.0deg) }
  50% { transform: rotate(10.0deg) }
  60% { transform: rotate( 0.0deg) }
  100% { transform: rotate( 0.0deg) }
`,x=o.span`
  animation-name: ${u}; /* Refers to the name of your @keyframes element below */
  animation-duration: 2.5s; /* Change to speed up or slow down */
  animation-iteration-count: infinite; /* Never stop waving :) */
  transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
  display: inline-block;
`,v=({href:e,children:o,className:r})=>c(y,{target:"_blank",rel:"noopener",href:e,className:r,children:o}),y=o.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
`,w=o(v)`
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
`,b=()=>h(z,{children:[c(C,{children:"Find me on:"}),h(I,{children:[c(k,{href:"https://discordapp.com/users/770868890737704979",hoverColor:"#5865F2",IconComponent:c(n,{size:25})}),c(k,{href:"https://github.com/Kulothungan16",hoverColor:"#181717",IconComponent:c(t,{size:25})}),c(k,{href:"https://www.instagram.com/kuloth.__.ungan",hoverColor:"#E4405F",IconComponent:c(i,{size:25})}),c(k,{href:"mailto:kulothunganug@gmail.com",hoverColor:"#EA4335",IconComponent:c(a,{size:25})}),c(k,{href:"https://www.youtube.com/channel/UCPFVA4ruEe3QOtTfxEGpqrg",hoverColor:"#FF0000",IconComponent:c(s,{size:25})})]})]}),C=o.p`
  margin-bottom: 10px;
`,z=o.div`
  position: fixed;
  bottom: 30px;
`,k=o((({href:e,hoverColor:o,className:r,IconComponent:n})=>c(w,{href:e,hoverColor:o,className:r,children:n})))`
  margin-right: 7px;
`,I=o.div`
  display: flex;
  flex-direction: row;
`,j=()=>h(N,{children:[c(S,{children:"a self-taught developer seeking to learn new things."}),h(E,{children:[c(F,{href:"https://www.python.org/",children:"Python"}),c(F,{href:"https://kivy.org/",children:"Kivy"}),c(F,{href:"https://www.djangoproject.com/",children:"django"}),c(F,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",children:"JavaScript"}),c(F,{href:"https://developer.mozilla.org/en-US/docs/Web/css",children:"CSS"}),c(F,{href:"https://developer.mozilla.org/en-US/docs/Web/html",children:"HTML"}),c(F,{href:"https://reactjs.org/",children:"React"}),c(F,{href:"https://reactnative.dev/",children:"React Native"}),c(F,{href:"https://firebase.google.com/",children:"Firebase"})]})]}),N=o.div``,S=o.p`
  font-size: 20px;

  @media only screen and (max-width: 600px) {
    font-size: 17px;
  }
`,F=o(v)`
  font-size: 15px;
  background-color: crimson;
  border-radius: 5px;
  padding: 5px;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
  }
`,E=o.div`
  margin-top: 20px;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`,L=()=>h(U,{children:[c(p,{}),c(j,{}),c(b,{})]}),U=o.div`
  padding: 150px;

  @media only screen and (max-width: 600px) {
    padding: 150px 0 0 40px;
  }
`;d.render(c(l.StrictMode,{children:c(L,{})}),document.getElementById("root"));
