import{Q as _}from"./QSelect.0342b451.js";import{A as $,i as y,r as m,B as M,o as Q,m as h,K as k,L as u,l,N as B,U as v,q as i,ai as d,M as q,S,ae as w,Q as N,n as A,y as T}from"./index.7da93179.js";import{u as j,r as D}from"./index.esm.0811bb15.js";import{a as b}from"./axios.07c7c7d9.js";import{u as g}from"./debug.9f3fb657.js";import{d as L}from"./help.4068c5a1.js";import{_ as E}from"./SmsLogComponent.07bbce11.js";import"./QItem.642560fa.js";import"./rtl.ba9e3bff.js";import"./QMenu.00781621.js";import"./format.3e32b8d9.js";import"./QTable.01150601.js";import"./QList.709f4980.js";import"./QMarkupTable.f781861b.js";import"./QLinearProgress.6e390987.js";import"./use-fullscreen.62410448.js";const I=i("div",{class:"text-h6 q-mb-md"},"Send SMS",-1),K=$({__name:"SendSmsUser",props:{smsUser:null},setup(o){const n=o,c=y("bus"),x=m([]),r=m(!1),V=m(!1),p=m(),t=M({content:null,template:null,user_id:null}),f=j({content:{required:D}},t),C=()=>{t.content=t.template},U=()=>{r.value=!0,b.post("/sms/senduser",t).then(s=>{L("positive",`SMS sent to ${n.smsUser.mobile}`),r.value=!1,V.value=!1,x.value=s.data,c.emit("getSmsLog",{})}).catch(s=>{g(s),r.value=!1})};return Q(()=>{Object.assign(t,{content:null,template:null,user_id:n.smsUser.id}),b.get("/smstemplate/index").then(s=>{p.value=s.data.map(e=>({value:e.content,label:e.name}))}).catch(s=>{g(s)})}),(s,e)=>(h(),k(N,null,{default:u(()=>[l(q,null,{default:u(()=>[I,l(_,{modelValue:t.template,"onUpdate:modelValue":[e[0]||(e[0]=a=>t.template=a),e[1]||(e[1]=a=>C())],options:p.value,label:"Template","map-options":"","emit-value":"",class:"q-mb-md",outlined:""},null,8,["modelValue","options"]),l(B,{modelValue:t.content,"onUpdate:modelValue":e[2]||(e[2]=a=>t.content=a),type:"textarea",maxlength:"160",label:"Message to send",error:v(f).content.$error,autogrow:"",counter:"","max-length":"160"},null,8,["modelValue","error"]),i("div",null,"The above message will be sent to "+d(o.smsUser.fullname)+" ("+d(o.smsUser.mobile)+") ",1)]),_:1}),l(w,{align:"right"},{default:u(()=>[l(S,{color:"secondary",onClick:e[3]||(e[3]=a=>[t.content=null]),label:"Reset",flat:""}),l(S,{color:"primary",disabled:v(f).$invalid,loading:r.value,onClick:e[4]||(e[4]=a=>U()),label:"Send"},null,8,["disabled","loading"])]),_:1})]),_:1}))}}),O={key:0},R=i("div",{class:"text-h5"},"SMS Activities",-1),re=$({__name:"ContractorSms",props:{model:null},setup(o){return(n,c)=>o.model.id?(h(),A("div",O,[R,i("p",null,"Send an SMS or view the history for this "+d(n.$t("contractor.name"))+".",1),l(K,{"sms-user":o.model,class:"q-mb-lg"},null,8,["sms-user"]),l(E,{user_id:o.model.id},null,8,["user_id"])])):T("",!0)}});export{re as default};
