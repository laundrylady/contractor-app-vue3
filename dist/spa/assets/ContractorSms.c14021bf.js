import{Q as _}from"./QSelect.5b5bbc87.js";import{A as $,i as y,r as m,B as M,o as Q,m as h,K as k,L as u,l,N as B,U as v,q as i,b8 as d,M as q,S as b,ae as w,Q as N,n as A,y as T}from"./index.fbd59a76.js";import{u as j,r as D}from"./index.esm.b35330f2.js";import{a as S}from"./axios.b71dd2ad.js";import{u as g}from"./debug.805a8aef.js";import{b as L}from"./help.24013814.js";import{_ as E}from"./SmsLogComponent.fded254f.js";import"./QItemSection.e2ef8c04.js";import"./rtl.af167dee.js";import"./format.c926bd4b.js";import"./QTable.1191bda5.js";import"./QList.eaa15994.js";import"./QMarkupTable.e4b2956c.js";import"./QLinearProgress.457e2dab.js";const I=i("div",{class:"text-h6 q-mb-md"},"Send SMS",-1),K=$({__name:"SendSmsUser",props:{smsUser:null},setup(a){const n=a,c=y("bus"),x=m([]),r=m(!1),V=m(!1),p=m(),t=M({content:null,template:null,user_id:null}),f=j({content:{required:D}},t),C=()=>{t.content=t.template},U=()=>{r.value=!0,S.post("/sms/senduser",t).then(s=>{L("positive",`SMS sent to ${n.smsUser.mobile}`),r.value=!1,V.value=!1,x.value=s.data,c.emit("getSmsLog",{})}).catch(s=>{g(s),r.value=!1})};return Q(()=>{Object.assign(t,{content:null,template:null,user_id:n.smsUser.id}),S.get("/smstemplate/index").then(s=>{p.value=s.data.map(e=>({value:e.content,label:e.name}))}).catch(s=>{g(s)})}),(s,e)=>(h(),k(N,null,{default:u(()=>[l(q,null,{default:u(()=>[I,l(_,{modelValue:t.template,"onUpdate:modelValue":[e[0]||(e[0]=o=>t.template=o),e[1]||(e[1]=o=>C())],options:p.value,label:"Template","map-options":"","emit-value":"",class:"q-mb-md",outlined:""},null,8,["modelValue","options"]),l(B,{modelValue:t.content,"onUpdate:modelValue":e[2]||(e[2]=o=>t.content=o),type:"textarea",maxlength:"160",label:"Message to send",error:v(f).content.$error,autogrow:"",counter:"","max-length":"160"},null,8,["modelValue","error"]),i("div",null,"The above message will be sent to "+d(a.smsUser.fullname)+" ("+d(a.smsUser.mobile)+") ",1)]),_:1}),l(w,{align:"right"},{default:u(()=>[l(b,{color:"secondary",onClick:e[3]||(e[3]=o=>[t.content=null]),label:"Reset",flat:""}),l(b,{color:"primary",disabled:v(f).$invalid,loading:r.value,onClick:e[4]||(e[4]=o=>U()),label:"Send"},null,8,["disabled","loading"])]),_:1})]),_:1}))}}),O={key:0},R=i("div",{class:"text-h5"},"SMS Activities",-1),oe=$({__name:"ContractorSms",props:{model:null},setup(a){return(n,c)=>a.model.id?(h(),A("div",O,[R,i("p",null,"Send an SMS or view the history for this "+d(n.$t("contractor.name"))+".",1),l(K,{"sms-user":a.model,class:"q-mb-lg"},null,8,["sms-user"]),l(E,{user_id:a.model.id},null,8,["user_id"])])):T("",!0)}});export{oe as default};
