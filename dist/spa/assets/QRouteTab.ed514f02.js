import{A as p,r as l,o as k,J as i,m as f,n as d,l as c,L as g,y as v,V as M,am as h,an as b,g as L,w as x}from"./index.7da93179.js";import{u as R,a as T,b as y}from"./QTabs.33e82f7a.js";const C={key:0},F=p({__name:"MapWithMarker",props:{latLng:null,height:null},setup(e){const t=e,n=l(),a=l(),o=`width:100%;height:${t.height||"300px"}`;return k(()=>{a.value=t.latLng}),(r,s)=>{const u=i("GMapMarker"),m=i("GMapMap");return e.latLng&&a.value?(f(),d("div",C,[c(m,{center:e.latLng,zoom:8,"map-type-id":"terrain",style:o,ref_key:"mapRefMarker",ref:n},{default:g(()=>[c(u,{position:e.latLng,clickable:!0,draggable:!1,onClick:s[0]||(s[0]=$=>a.value=e.latLng),icon:{url:"https://cdn.mapmarker.io/api/v1/font-awesome/v5/pin?text=P&size=32&background=cf1677&color=FFF&hoffset=-1"}},null,8,["position","icon"])]),_:1},8,["center"])])):v("",!0)}}});var G=M({name:"QRouteTab",props:{...h,...R},emits:T,setup(e,{slots:t,emit:n}){const a=b({useDisableForRouterLinkProps:!1}),{renderTab:o,$tabs:r}=y(e,t,n,{exact:L(()=>e.exact),...a});return x(()=>`${e.name} | ${e.exact} | ${(a.resolvedLink.value||{}).href}`,()=>{r.verifyRouteModel()}),()=>o(a.linkTag.value,a.linkAttrs.value)}});export{G as Q,F as _};
