import{S as o,P as r,W as a,B as d,M as w,a as s,_ as c,E as h}from"./locar.es-D2pHxP8J.js";const i=new o,n=new r(60,window.innerWidth/window.innerHeight,.001,100),e=new a;e.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(e.domElement);window.addEventListener("resize",l=>{e.setSize(window.innerWidth,window.innerHeight),n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix()});const m=new d(2,2,2),p=new w(m,new s({color:16711680})),t=new c(i,n),W=new h(e);t.fakeGps(-.72,51.05);t.add(p,-.72,51.0501);e.setAnimationLoop(f);function f(){W.update(),e.render(i,n)}
