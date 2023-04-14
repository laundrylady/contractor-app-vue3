import{Q as w,_ as A}from"./QEditor.13b04ec6.js";import{Q as U}from"./QSelect.5b5bbc87.js";import{A as q,i as M,r as f,B as T,o as D,m as a,K as F,L as _,l as o,N as J,U as b,n,R as j,q as u,F as N,b7 as Q,y as g,M as L,S,ae as R,Q as H,b8 as m}from"./index.fbd59a76.js";import{u as I,r as v}from"./index.esm.b35330f2.js";import{u as K}from"./use-quasar.1140b8ec.js";import{a as h}from"./axios.b71dd2ad.js";import{u as k}from"./debug.805a8aef.js";import{b as z}from"./help.24013814.js";import"./QToolbarTitle.a19fbe89.js";import"./QTable.1191bda5.js";import"./QList.eaa15994.js";import"./QMarkupTable.e4b2956c.js";import"./QLinearProgress.457e2dab.js";import"./ClosePopup.117d0adb.js";import"./QBadge.3656646d.js";import"./QBtnGroup.bdc458fc.js";import"./format.c926bd4b.js";import"./QItemSection.e2ef8c04.js";import"./rtl.af167dee.js";const G=u("div",{class:"text-h6 q-mb-md"},"Send Notification",-1),P={key:0,class:"q-pa-md"},W={key:1,class:"bg-positive text-white q-pa-md q-mt-md"},X=q({__name:"SendNotificationOrder",props:{notifiable_id:null,order:null},setup(s){const d=s,c=K(),x=M("bus"),r=f(),C=f(),$=f(),y={notification_template_id:null,notifiable_id:d.notifiable_id,notifiable_type:"Order",html:"",subject:null},i=T(y),V=f(),p=I({notifiable_id:{required:v},notifiable_type:{required:v},subject:{required:v},html:{required:v}},i),B=()=>{r.value=null,Object.assign(i,JSON.parse(JSON.stringify(y)))},E=()=>{if(!i.notification_template_id){i.subject=null,i.html="";return}h.get(`/notificationtemplate/${i.notification_template_id}`).then(l=>{l.data.content?(i.html=l.data.content,i.subject=l.data.subject):C.value=""})},O=()=>{c.loading.show({message:"Queuing emails for sending..."}),h.post("/notification/sendorder",i).then(l=>{z("positive","Emails queued for sending"),c.loading.hide(),r.value=l.data,x.emit("getNotifications"),i.subject=null,i.html=""}).catch(l=>{k(l),c.loading.hide()})};return D(()=>{const l=[];d.order.team.users&&(d.order.team.users.forEach(e=>{e.email_notifications&&l.push(e)}),V.value=l),h.get("/notificationtemplate/index").then(e=>{$.value=[{value:null,label:"Select a template"}].concat(e.data.map(t=>({value:t.id,label:t.name})))}).catch(e=>{k(e)})}),(l,e)=>(a(),F(H,null,{default:_(()=>[o(L,null,{default:_(()=>[G,o(U,{modelValue:i.notification_template_id,"onUpdate:modelValue":[e[0]||(e[0]=t=>i.notification_template_id=t),e[1]||(e[1]=t=>E())],options:$.value,"emit-value":"","map-options":"",label:"Template",outlined:"",class:"q-mb-md"},null,8,["modelValue","options"]),o(J,{modelValue:i.subject,"onUpdate:modelValue":e[2]||(e[2]=t=>i.subject=t),label:"Subject",error:b(p).subject.$invalid,onBlur:e[3]||(e[3]=t=>b(p).subject.$touch())},null,8,["modelValue","error"]),o(w,{modelValue:i.html,"onUpdate:modelValue":e[4]||(e[4]=t=>i.html=t),label:"Content",error:b(p).html.$invalid},null,8,["modelValue","error"]),!r.value||!r.value.length?(a(),n("div",P,[j(" An email will be sent to the following members: "),u("ul",null,[(a(!0),n(N,null,Q(V.value,t=>(a(),n("li",{key:t.id},m(t.fullname)+" ("+m(t.email)+") ",1))),128))])])):g("",!0),r.value?(a(),n("div",W,[j(" Email sent to: "),(a(!0),n(N,null,Q(r.value,t=>(a(),n("div",{key:t.id},[u("strong",null,m(t.user.fullname)+" ("+m(t.user.email)+")",1)]))),128))])):g("",!0)]),_:1}),o(R,{align:"right"},{default:_(()=>[o(S,{onClick:e[5]||(e[5]=t=>B()),color:"secondary",label:"Reset"}),o(S,{onClick:e[6]||(e[6]=t=>O()),disable:b(p).$invalid,label:"Send",color:"primary"},null,8,["disable"])]),_:1})]),_:1}))}}),Y={key:0},Z=u("div",{class:"text-h6"},"Email Activities",-1),$e=q({__name:"OrderNotifications",props:{model:null},setup(s){return(d,c)=>s.model.id?(a(),n("div",Y,[Z,u("p",null,"Send an Email or view the history for this "+m(d.$t("order.name"))+".",1),o(X,{order:s.model,notifiable_id:s.model.id,class:"q-mb-lg"},null,8,["order","notifiable_id"]),o(A,{notifiable_id:s.model.id,notifiable_type:"Order"},null,8,["notifiable_id"])])):g("",!0)}});export{$e as default};
