import{Q as b,a as _}from"./QItem.642560fa.js";import{A as v,i as q,m as t,K as d,L as c,n as a,F as k,b1 as g,l as i,y as r,q as n,R as o,ai as s,U as l,O as y}from"./index.7da93179.js";import{Q as B}from"./QList.709f4980.js";import{i as Q,j as C,k as D,c as A}from"./help.4068c5a1.js";import{_ as F}from"./StatusTag.c958dd1f.js";import{_ as L}from"./UserAvatar.41db8b9e.js";const N=["onClick"],O={key:0},V={key:1},w={class:"text-grey-7"},I={key:0},$={key:0,class:"q-ml-xs q-mr-xs"},j={class:"text-grey-7"},M={key:0,class:"q-mr-sm"},S={class:"text-h7 q-mt-xs"},H=v({__name:"OrderListFormat",props:{orders:null,noAvatar:{type:Boolean}},setup(m){const h=q("bus"),f=p=>{h.emit("editOrderModal",p)};return(p,E)=>(t(),d(B,{separator:"",class:"bg-white"},{default:c(()=>[(t(!0),a(k,null,g(m.orders,e=>(t(),d(b,{key:e.id},{default:c(()=>[!m.noAvatar&&e.contractor?(t(),d(_,{key:0,avatar:""},{default:c(()=>[i(L,{user:e.contractor},null,8,["user"])]),_:2},1024)):r("",!0),i(_,null,{default:c(()=>[n("div",null,[n("a",{onClick:u=>f(e.id),class:"link"},[o(s(l(Q)(e.scheduled_pickup_date))+" "+s(e.scheduled_pickup_date)+" (",1),e.agreed_pickup_time?r("",!0):(t(),a("span",O,s(l(C)(e.scheduled_pickup_time)),1)),e.agreed_pickup_time?(t(),a("span",V,s(l(D)(e.agreed_pickup_time)),1)):r("",!0),o(")")],8,N),i(F,{status:e.status,small:!0,class:"q-ml-xs"},null,8,["status"])]),n("div",w,[i(y,{name:"settings",color:"grey-7"}),o(),e.productcategories?(t(),a("span",I,[(t(!0),a(k,null,g(e.productcategories,(u,x)=>(t(),a("span",{key:u.id},[o(s(u.name),1),x+1!==e.productcategories.length?(t(),a("span",$,"&")):r("",!0)]))),128)),o(" pickup with "+s(e.team.name),1)])):r("",!0)]),n("div",j,[i(y,{name:"place",color:"grey-7"}),o(),e.team.suburbpostcoderegion?(t(),a("span",M,s(e.team.suburbpostcoderegion.locality)+" "+s(e.team.suburbpostcoderegion.state),1)):r("",!0)])]),_:2},1024),e.grand_total_price>0?(t(),d(_,{key:1,side:""},{default:c(()=>[n("div",S,s(l(A)(e.grand_total_price)),1)]),_:2},1024)):r("",!0)]),_:2},1024))),128))]),_:1}))}});export{H as _};
