import{P as w,W as p,S as h,_ as m,b as l,E as u,B as f,y as g,M as b,a as y}from"./locar.es-C5sjgCG4.js";const t=new w(80,window.innerWidth/window.innerHeight,.001,1e3),n=new p;n.setSize(window.innerWidth,window.innerHeight);const i=new h;document.body.appendChild(n.domElement);window.addEventListener("resize",e=>{n.setSize(window.innerWidth,window.innerHeight),t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix()});const s=new m(i,t),j=new l(t),P=new u(n);let a=!0;const d={},W=new f(20,20,20),x=new g(n);s.on("gpsupdate",async(e,c)=>{(a||c>100)&&((await(await fetch(`https://hikar.org/webapp/map?bbox=${e.coords.longitude-.02},${e.coords.latitude-.02},${e.coords.longitude+.02},${e.coords.latitude+.02}&layers=poi&outProj=4326`)).json()).features.forEach(o=>{if(!d[o.properties.osm_id]){const r=new b(W,new y({color:16711680}));s.add(r,o.geometry.coordinates[0],o.geometry.coordinates[1],0,o.properties),d[o.properties.osm_id]=r}}),a=!1)});s.startGps();n.setAnimationLoop(H);function H(){P.update(),j.update();const e=x.raycast(t,i);e.length&&alert(`This is ${e[0].object.properties.name}`),n.render(i,t)}
