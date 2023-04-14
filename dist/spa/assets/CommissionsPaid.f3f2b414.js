import{A as M,r as Q,B as S,g as Y,o as T,J as N,m as n,K as c,L as s,l as a,O as P,M as F,q as t,af as G,S as U,Q as $,n as b,b7 as y,U as i,F as x,b8 as o,y as _,R as f}from"./index.fbd59a76.js";import{Q as v,a as E}from"./QBreadcrumbs.18e816d5.js";import{Q as I}from"./QBadge.3656646d.js";import{a as C,Q as V}from"./QItemSection.e2ef8c04.js";import{Q as L}from"./QList.eaa15994.js";import{Q as R}from"./QMarkupTable.e4b2956c.js";import{Q as W}from"./QPage.c929a5d1.js";import{m as w,a as z}from"./axios.b71dd2ad.js";import{u as A}from"./use-quasar.1140b8ec.js";import{_ as B}from"./DateField.33bf04e7.js";import{u as H}from"./debug.805a8aef.js";import{a as u}from"./help.24013814.js";import"./format.c926bd4b.js";import"./ClosePopup.117d0adb.js";const J=t("div",{class:"text-h6 q-mb-md"}," Commissions Paid",-1),K={class:"row q-col-gutter-md"},j={class:"col-xs-12 col-sm-5"},X={class:"col-xs-12 col-sm-5"},Z={class:"col-xs-12 col-sm-2"},tt=t("thead",null,[t("tr",null,[t("th",{class:"text-left"},"Contractor"),t("th",{style:{width:"100px"},class:"text-left"},"Total"),t("th",{style:{width:"100px"},class:"text-left"},"GST"),t("th",{style:{width:"100px"},class:"text-left"},"Grand")])],-1),et=["onClick"],at={class:"bg-grey-2 text-bold"},st=t("td",null,null,-1),vt=M({__name:"CommissionsPaid",setup(ot){const l=Q(),g=A(),h=Q(!0),p=S({start:w().startOf("isoWeek").format("DD/MM/YYYY"),end:w().endOf("isoWeek").format("DD/MM/YYYY")}),k=()=>{g.loading.show({message:"Fetching commission data..."}),z.post("/user/contractor/reporting/commissionspaid",p).then(r=>{l.value=r.data,g.loading.hide()}).catch(r=>{H(r),g.loading.hide()})},O=r=>{r.showOrders=!r.showOrders},q=Y(()=>l.value&&l.value?h.value?l.value.data.filter(r=>r.commission.total>0):l.value.data:[]);return T(()=>{k()}),(r,d)=>{const D=N("router-link");return n(),c(W,{padding:""},{default:s(()=>[a(E,{class:"q-mb-md q-mt-md"},{separator:s(()=>[a(P,{size:"1.5em",name:"chevron_right"})]),default:s(()=>[a(v,{label:"Home",icon:"home",to:{name:"appDashboard"}}),a(v,{label:"Reporting",to:{name:"reporting"}}),a(v,{label:"Commissions Paid"})]),_:1}),a($,{class:"bg-seamless q-mb-lg"},{default:s(()=>[a(F,null,{default:s(()=>[J,t("div",K,[t("div",j,[a(B,{modelValue:p.start,"onUpdate:modelValue":d[0]||(d[0]=e=>p.start=e),label:"Start",dense:!0,outlined:!0},null,8,["modelValue"])]),t("div",X,[a(B,{modelValue:p.end,"onUpdate:modelValue":d[1]||(d[1]=e=>p.end=e),label:"End",dense:!0,outlined:!0},null,8,["modelValue"])]),t("div",Z,[a(G,{modelValue:h.value,"onUpdate:modelValue":d[2]||(d[2]=e=>h.value=e),label:"Only paid",class:"q-mr-md"},null,8,["modelValue"]),a(U,{onClick:d[3]||(d[3]=e=>k()),label:"Submit",color:"primary"})])])]),_:1})]),_:1}),l.value?(n(),c(R,{key:0},{default:s(()=>[tt,t("tbody",null,[(n(!0),b(x,null,y(i(q),e=>(n(),b("tr",{key:e.id},[t("td",null,[t("a",{class:"link text-h6",onClick:m=>O(e)},[f(o(e.fullname)+" ",1),e.contractor_gst_registered?(n(),c(I,{key:0,label:"GST",color:"secondary"})):_("",!0)],8,et),e.showOrders?(n(),c(L,{key:0,dense:""},{default:s(()=>[e.commission.orders.length?_("",!0):(n(),c(C,{key:0},{default:s(()=>[a(V,null,{default:s(()=>[f("No orders found")]),_:1})]),_:1})),(n(!0),b(x,null,y(e.commission.orders,m=>(n(),c(C,{key:m.id},{default:s(()=>[a(V,null,{default:s(()=>[t("div",null,[a(D,{to:{name:"order-edit",params:{id:m.id}},class:"link",target:"_blank"},{default:s(()=>[f("#"+o(m.display_id),1)]),_:2},1032,["to"]),f(" - "+o(m.team.name)+" - "+o(m.scheduled_pickup_date)+" - "+o(i(u)(m.commission_paid_amount))+" / "+o(i(u)(m.commission_paid_amount_gst)),1)])]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)):_("",!0)]),t("td",null,o(i(u)(e.commission.total)),1),t("td",null,o(i(u)(e.commission.totalGst)),1),t("td",null,o(i(u)(e.commission.grandTotal)),1)]))),128))]),t("tfoot",null,[t("tr",at,[st,t("td",null,o(i(u)(l.value.total.total)),1),t("td",null,o(i(u)(l.value.total.gst)),1),t("td",null,o(i(u)(l.value.total.grand)),1)])])]),_:1})):_("",!0)]),_:1})}}});export{vt as default};
