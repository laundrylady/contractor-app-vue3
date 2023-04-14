import{Q as j}from"./QCircularProgress.03fa6c11.js";import{A as D,i as G,r as b,g as H,o as B,E as K,m as d,n as u,l as s,q as e,b8 as l,U as h,L as n,S as q,F as S,b7 as W,y as c,K as O,ad as J,w as X,Q as y,M as x,R as M,O as P,t as Z}from"./index.fbd59a76.js";import{h as $,a as R}from"./axios.b71dd2ad.js";import{_ as ee}from"./GlobalNotes.92be495e.js";import{_ as Q}from"./OrderListFormat.896168da.js";import{_ as te}from"./OrderRecurringBookingFormat.2e0b64ad.js";import{Q as se}from"./QSpace.8da48267.js";import{Q as oe}from"./QBtnGroup.bdc458fc.js";import{Q as ae}from"./QBadge.3656646d.js";import{t as re,Q as le}from"./index.esm.fb7d5adc.js";import{u as T}from"./debug.805a8aef.js";import{c as ne,n as Y,a as C}from"./help.24013814.js";import{_ as de,a as ie}from"./UserRosterScheduleCreate.478871ce.js";import"./format.c926bd4b.js";import"./QToolbarTitle.a19fbe89.js";import"./QItemSection.e2ef8c04.js";import"./QList.eaa15994.js";import"./UserAvatar.a874c3dc.js";import"./StatusTag.5e471305.js";import"./QSelect.5b5bbc87.js";import"./rtl.af167dee.js";import"./ClosePopup.117d0adb.js";import"./index.esm.b35330f2.js";import"./helpers.3afbd4d2.js";import"./DateField.33bf04e7.js";import"./use-quasar.1140b8ec.js";const ce={class:"flex items-center q-mb-sm"},ue={class:"text-h7 text-primary"},me=["onMouseenter"],he={key:0,style:{display:"flex","justify-content":"space-evenly","flex-wrap":"wrap","align-items":"center","font-weight":"400","font-size":"12px",height:"auto"}},ve={key:1,class:"text-center q-mt-sm"},_e=D({__name:"UserRosterScheduleManagement",props:{user:null},setup(f){const k=f,p=G("bus"),t=b(),m=b(!1),w=b(),v=()=>{m.value=!0;const i=$(o.value).subtract(1,"month").startOf("month").format("YYYY-MM-DD"),r=$(o.value).add(1,"month").endOf("month").format("YYYY-MM-DD");R.get(`/userrosterschedule/index?user_id=${k.user.id}&start=${i}&end=${r}`).then(a=>{t.value=a.data,m.value=!1}).catch(a=>{T(a),m.value=!1})},o=b(re()),_=b(),N=H(()=>$(o.value).format("MMMM YYYY")),U=()=>{_.value&&(_.value.moveToToday(),v())},L=()=>{_.value&&(_.value.prev(),v())},V=()=>{_.value&&(_.value.next(),v())},z=i=>{const r=$();return!!$(i.date).isSameOrAfter(r)},F=i=>{if(!t.value)return[];const r=t.value.filter(a=>a.day===i.date);return r||[]},A=i=>t.value?t.value.filter(r=>r.day===i.date).length>0:[],E=i=>{p.emit("editUserRosterSchedule",i)},I=i=>{ne("This will create a new entry for this day").onOk(()=>{p.emit("newUserRosterSchedule",{day:i.date,user:k.user})})};return B(async()=>{v(),p.on("getSchedule",()=>{v()})}),K(()=>{p.off("getSchedule")}),(i,r)=>(d(),u(S,null,[s(de),s(ie),e("div",ce,[e("span",ue,l(h(N)),1),s(se),s(oe,null,{default:n(()=>[s(q,{onClick:r[0]||(r[0]=a=>L()),icon:"chevron_left",color:"secondary"}),s(q,{onClick:r[1]||(r[1]=a=>U()),label:"Today",color:"secondary"}),s(q,{onClick:r[2]||(r[2]=a=>V()),icon:"chevron_right",color:"secondary"})]),_:1})]),s(h(le),{ref_key:"calendarRef",ref:_,modelValue:o.value,"onUpdate:modelValue":r[3]||(r[3]=a=>o.value=a),weekdays:[1,2,3,4,5,6,0],hoverable:"",bordered:"",animated:"","day-min-height":80,"day-height":80,"month-label-size":"md","date-align":"right"},{day:n(({scope:a})=>[e("div",{onMouseenter:g=>w.value=a.timestamp.date,style:{height:"100%"}},[A(a.timestamp)?(d(),u("div",he,[(d(!0),u(S,null,W(F(a.timestamp),g=>(d(),O(ae,{key:g.time,label:`${h(Y)(g.start_time)} - ${h(Y)(g.end_time)}`,class:"q-mb-xs cursor-pointer",onClick:st=>E(g.id),color:g.active?"positive":"negative"},null,8,["label","onClick","color"]))),128))])):c("",!0),z(a.timestamp)&&w.value===a.timestamp.date?(d(),u("div",ve,[s(q,{onClick:g=>I(a.timestamp),icon:"add_circle",flat:"",size:"sm",dense:"",label:i.$t("schedule.create"),color:"grey-6"},null,8,["onClick","label"])])):c("",!0)],40,me)]),_:1},8,["modelValue"])],64))}}),fe={key:0},pe={class:"row q-col-gutter-md q-mb-lg"},ge={class:"col-xs-12 col-sm-4"},ye=e("div",{class:"text-h6"},"Weekly Target",-1),xe={class:"text-center",style:{height:"65px"}},be={class:"text-center q-mt-sm"},ke={key:0},we={class:"col-xs-12 col-sm-4"},$e=e("div",{class:"text-h6 q-mb-md"},"Commissions",-1),Ce={class:"row q-col-gutter-md"},Oe={class:"col-xs-12 col-sm-6"},qe={class:"text-h6 text-center"},Me=e("div",{class:"text-center"},"Owing",-1),Pe={class:"col-xs-12 col-sm-6"},Qe={class:"text-h6 text-center"},Re=e("div",{class:"text-center"}," Paid ",-1),Te={class:"col-xs-12 col-sm-4"},Se=e("div",{class:"text-h6 q-mb-md"},"Statistics",-1),Ye={class:"row q-col-gutter-md"},De={class:"col-xs-12 col-sm-6"},Be={class:"text-h6 text-center"},Ne={class:"text-center"},Ue={class:"col-xs-12 col-sm-6"},Le={class:"text-h6 text-center"},Ve=e("div",{class:"text-center"}," Total Revenue ",-1),ze={class:"row q-col-gutter-md"},Fe={class:"col-xs-12 col-sm-6"},Ae=e("div",{class:"text-h6 q-mb-md"},"Awaiting Pickup",-1),Ee={key:0},Ie={class:"col-xs-12 col-sm-6"},je={class:"text-h6 q-mb-md"},Ge={key:0},He={class:"col-xs-12 col-sm-6"},Ke=e("div",{class:"text-h6 q-mb-md"},"In Progress",-1),We={key:0},Je={class:"col-xs-12 col-sm-6"},Xe=e("div",{class:"text-h6 q-mb-md"},"Recently Completed",-1),Ze={key:0},et={class:"text-h5"},tt={class:"q-mb-xl"},Pt=D({__name:"ContractorDashboard",props:{model:null},setup(f){const k=f,p=J(),t=b(),m=b(),w=()=>{R.get(`/user/contractor/dashboard/${k.model.id}`).then(o=>{t.value=o.data}).catch(o=>{T(o)})},v=()=>{R.get(`/user/contractor/recurring/${k.model.id}`).then(o=>{m.value=o.data}).catch(o=>{T(o)})};return B(()=>{w(),v()}),X(()=>p.params.id,o=>{p.name==="contractor-dashboard"&&o&&(w(),v())}),(o,_)=>f.model.id&&t.value?(d(),u("div",fe,[e("div",pe,[e("div",ge,[s(y,{class:"bg-accent",style:{height:"160px"}},{default:n(()=>[s(x,null,{default:n(()=>[ye,e("div",xe,[t.value.weeklyOrders.percentage?(d(),O(j,{key:0,value:t.value.weeklyOrders.percentage,size:"64px",color:"primary","track-color":"pink-1"},null,8,["value"])):c("",!0)]),e("div",be,[M(l(h(C)(t.value.weeklyOrders.sum))+" / "+l(h(C)(f.model.contractor_target))+" ",1),t.value.weeklyOrders.diff===0?(d(),u("span",ke,"~")):c("",!0),t.value.weeklyOrders.diff<0?(d(),O(P,{key:1,name:"arrow_downward",color:"negative"})):c("",!0),t.value.weeklyOrders.diff>0?(d(),O(P,{key:2,name:"arrow_upward",color:"positive"})):c("",!0),M(),t.value.weeklyOrders.diff!==0?(d(),u("span",{key:3,class:Z({"text-positive":t.value.weeklyOrders.diff>0,"text-negative":t.value.weeklyOrders.diff<0})},l(t.value.weeklyOrders.diff)+"%",3)):c("",!0)])]),_:1})]),_:1})]),e("div",we,[s(y,{class:"bg-secondary text-white",style:{height:"160px"}},{default:n(()=>[s(x,null,{default:n(()=>[$e,e("div",Ce,[e("div",Oe,[e("div",qe,l(h(C)(t.value.totalCommissionsOwing.grandTotal)),1),Me]),e("div",Pe,[e("div",Qe,l(h(C)(t.value.totalCommissionsPaid.grandTotal)),1),Re])])]),_:1})]),_:1})]),e("div",Te,[s(y,{class:"bg-secondary text-white",style:{height:"160px"}},{default:n(()=>[s(x,null,{default:n(()=>[Se,e("div",Ye,[e("div",De,[e("div",Be,l(t.value.totalOrdersCount[0].count),1),e("div",Ne,"Total "+l(o.$t("order.namePlural")),1)]),e("div",Ue,[e("div",Le,l(h(C)(t.value.totalOrdersTotalPrice[0].sum?parseFloat(t.value.totalOrdersTotalPrice[0].sum)+parseFloat(t.value.totalOrdersTotalPriceGst[0].sum):0)),1),Ve])])]),_:1})]),_:1})])]),e("div",ze,[e("div",Fe,[s(y,{class:"bg-seamless q-mb-lg"},{default:n(()=>[s(x,null,{default:n(()=>[Ae,t.value.ordersConfirmed.length?c("",!0):(d(),u("div",Ee,"No "+l(o.$t("order.namePlural").toLowerCase())+" found. ",1)),s(Q,{orders:t.value.ordersConfirmed,"no-avatar":!0},null,8,["orders"])]),_:1})]),_:1})]),e("div",Ie,[s(y,{class:"bg-seamless q-mb-lg"},{default:n(()=>[s(x,null,{default:n(()=>[e("div",je,[s(P,{name:"sync"}),M(" Recurring "+l(o.$t("order.namePlural")),1)]),!m.value||!m.value.length?(d(),u("div",Ge,"No "+l(o.$t("order.namePlural").toLowerCase())+" found. ",1)):c("",!0),m.value?(d(),O(te,{key:1,orders:m.value,"no-avatar":!0},null,8,["orders"])):c("",!0)]),_:1})]),_:1})]),e("div",He,[s(y,{class:"bg-seamless q-mb-lg"},{default:n(()=>[s(x,null,{default:n(()=>[Ke,t.value.ordersInprogress.length?c("",!0):(d(),u("div",We,"No "+l(o.$t("order.namePlural").toLowerCase())+" found. ",1)),s(Q,{orders:t.value.ordersInprogress,"no-avatar":!0},null,8,["orders"])]),_:1})]),_:1})]),e("div",Je,[s(y,{class:"bg-seamless q-mb-lg"},{default:n(()=>[s(x,null,{default:n(()=>[Xe,t.value.ordersRecentCompleted.length?c("",!0):(d(),u("div",Ze,"No "+l(o.$t("order.namePlural").toLowerCase())+" found. ",1)),s(Q,{orders:t.value.ordersRecentCompleted,"no-avatar":!0},null,8,["orders"])]),_:1})]),_:1})])]),e("div",et,"Current "+l(o.$t("schedule.name")),1),e("p",null,"Below is the current schedule for the "+l(o.$t("contractor.name").toLowerCase())+".",1),e("div",tt,[s(_e,{user:f.model},null,8,["user"])]),s(ee,{notable_type:"User",notable_id:f.model.id,nobox:!0},null,8,["notable_id"])])):c("",!0)}});export{Pt as default};
