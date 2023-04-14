import{A as de,i as ue,r as $,B as ce,o as me,m as t,K as p,L as d,M as G,q as a,b8 as c,y as i,l as s,Q as K,R as U,n as o,G as H,S as _,N as M,ae as ve,aD as ye,F as g,b7 as x,U as y,t as X,O}from"./index.fbd59a76.js";import{Q as fe,a as pe}from"./QToolbarTitle.a19fbe89.js";import{Q as Y}from"./QSelect.5b5bbc87.js";import{a as Z,Q as q}from"./QItemSection.e2ef8c04.js";import{Q as ee}from"./rtl.af167dee.js";import{Q as te}from"./QBtnGroup.bdc458fc.js";import{Q as _e}from"./QList.eaa15994.js";import{Q as he}from"./QUploader.0da03d70.js";import{C as le}from"./ClosePopup.117d0adb.js";import{u as be,r as ae}from"./index.esm.b35330f2.js";import{u as ke}from"./use-quasar.1140b8ec.js";import{a as A}from"./axios.b71dd2ad.js";import{N as ge}from"./NoRecords.3250f2f6.js";import{u as B}from"./debug.805a8aef.js";import{u as L,b as R,g as xe,f as Ce,c as Ie}from"./help.24013814.js";import{_ as se}from"./DateField.33bf04e7.js";const Ve={class:"text-h3"},$e={class:"overflow-hidden"},Qe={key:0},De={class:"row q-col-gutter-md"},we={class:"col-xs-12 col-sm-6"},Ne={key:1},qe={class:"text-h6"},Se=["onClick"],Ue=["src"],Oe={key:1,style:{width:"64px"},class:"text-center"},Ae=["onClick"],Be=["onClick"],Le={key:0,class:"text-caption"},Te={key:0,class:"q-mt-sm"},Ee={key:0},Pe={key:0},Ge={key:1,class:"q-pa-md bg-grey-2 animated fadeIn"},Me={key:0},Re=a("div",{class:"text-h6 text-grey-7 q-mb-md"},"Choose a document type to upload: ",-1),ze={class:"row q-col-gutter-md"},je={key:0,class:"col-sm-4"},Fe=a("strong",{class:"text-grey-7"},"Identification",-1),Je=["onClick"],We={key:1,class:"col-sm-4"},Ke=a("strong",{class:"text-grey-7"},"NDIS",-1),He=["onClick"],Xe={key:2,class:"col-sm-4"},Ye=a("strong",{class:"text-grey-7"},"Insurance",-1),Ze=["onClick"],et={key:3,class:"col-sm-4"},tt=a("strong",{class:"text-grey-7"},"Purchases",-1),lt=["onClick"],at={key:4,class:"col-sm-4"},st=a("strong",{class:"text-grey-7"},"Other",-1),ot=["onClick"],nt={key:1,class:"animated fadeIn"},it=a("div",{class:"text-h6 text-grey-8 q-mb-xs"},"Details:",-1),rt={class:"row q-col-gutter-md"},dt={class:"col-xs-12 col-sm-6"},ut={class:"col-xs-12 col-sm-6"},ct={class:"q-mt-md"},mt={class:"q-mt-sm"},vt={class:"q-mt-md"},qt=de({__name:"GlobalAttachments",props:{attachable_type:null,attachable_id:null,disabled:{type:Boolean},type:null,nobox:{type:Boolean},label:null},setup(v){const Q=v,z=ue("bus"),T={attachable_type:Q.attachable_type,attachable_id:Q.attachable_id.toString(),file_file_name:null,name:null,type:"",expiry_date:null,video_uri:null},b=ke(),C=$(),u=ce(T),E=be({type:{required:ae},file_file_name:{required:ae}},u),I=$(!1),D=$(!1),m=$(),w=$(!1),k=$(!1),h=[{category:"Identification",value:"Drivers Licence",label:"Drivers Licence"},{category:"Identification",value:"Medicare Card",label:"Medicare Card"},{category:"Other",value:"Generic Document",label:"Generic Document"},{category:"Insurance",value:"Certificate of Currency for Public Liability Insurance",label:"Certificate of Currency for Public Liability Insurance"},{category:"NDIS",value:"NDIS Workers Clearance Certificate",label:"NDIS Workers Clearance Certificate"},{category:"Insurance",value:"Insurance Claim",label:"Insurance Claim"}],j=()=>{Q.attachable_type==="Team"&&z.emit("getTeam",{})},F=n=>(n.substring(n.lastIndexOf(".")+1,n.length)||n)!=="pdf",oe=()=>{I.value=!0,b.loading.show({message:"Saving attachment..."}),A.post("/attachment",u).then(()=>{R("positive","Attachment added"),Object.assign(u,T),S(),I.value=!1,k.value=!1,b.loading.hide(),j()}).catch(n=>{B(n),I.value=!1,b.loading.hide()})},J=n=>{Ie("This will remove the attachment").onOk(()=>{A.delete(`/attachment/${n.id}`).then(()=>{S(),R("positive","Attachment removed"),j()}).catch(l=>{B(l)})})},S=()=>{D.value=!0,A.post(`/attachment/fetch/${Q.attachable_type}/${Q.attachable_id}`).then(n=>{C.value=xe(n.data,"type"),D.value=!1}).catch(n=>{B(n),D.value=!1})},W=n=>{m.value=JSON.parse(JSON.stringify(n)),w.value=!0},ne=n=>{A.put(`/attachment/${n.id}`,n).then(()=>{m.value=!1,w.value=!1,S(),R("positive","Saved")}).catch(l=>{B(l)})},P=n=>{z.emit("view-file",{model:n,type:"attachment"})},N=n=>{let l=!1;return h.forEach(e=>{e.category===n&&(l=!0)}),l},ie=n=>{u.file_file_name=n.xhr.response,u.name||(u.name=n.xhr.response)};return me(()=>{S()}),(n,l)=>(t(),p(K,{class:X({"no-shadow":v.nobox}),style:{"min-height":"110px"}},{default:d(()=>[v.label?(t(),p(G,{key:0},{default:d(()=>[a("div",Ve,c(v.label)+"s",1)]),_:1})):i("",!0),a("div",{class:X({"q-pa-none":v.nobox})},[a("div",$e,[s(ye,{modelValue:w.value,"onUpdate:modelValue":l[6]||(l[6]=e=>w.value=e)},{default:d(()=>[s(K,{class:"modal"},{default:d(()=>[s(fe,{class:"bg-primary text-white"},{default:d(()=>[s(pe,null,{default:d(()=>[U(c(v.label||"Document")+"s",1),m.value.type?(t(),o("span",Qe," - "+c(m.value.type),1)):i("",!0)]),_:1}),H(s(_,{flat:"",round:"",dense:"",icon:"close"},null,512),[[le]])]),_:1}),s(G,null,{default:d(()=>[a("div",De,[s(Y,{modelValue:m.value.type,"onUpdate:modelValue":l[0]||(l[0]=e=>m.value.type=e),label:`${v.label||"Document"} type`,options:h,"emit-value":"","map-options":"",class:"col-xs-12 col-sm-6"},null,8,["modelValue","label"]),a("div",we,[s(se,{modelValue:m.value.expiry_date,"onUpdate:modelValue":l[1]||(l[1]=e=>m.value.expiry_date=e),label:"Expiry Date"},null,8,["modelValue"])])]),s(M,{type:"text",modelValue:m.value.name,"onUpdate:modelValue":l[2]||(l[2]=e=>m.value.name=e),label:"Name"},null,8,["modelValue"]),m.value.type==="Video"?(t(),p(M,{key:0,modelValue:m.value.video_uri,"onUpdate:modelValue":l[3]||(l[3]=e=>m.value.video_uri=e),label:"Enter the video URL"},null,8,["modelValue"])):i("",!0)]),_:1}),s(ve,{class:"q-mt-md",align:"right"},{default:d(()=>[H(s(_,{onClick:l[4]||(l[4]=e=>[m.value=!1,w.value=!1]),color:"secondary",flat:"",label:"Cancel"},null,512),[[le]]),s(_,{onClick:l[5]||(l[5]=e=>ne(m.value)),color:"primary",label:"Update"})]),_:1})]),_:1})]),_:1},8,["modelValue"]),(!C.value||!C.value.length)&&!k.value&&!D.value?(t(),p(ge,{key:0,class:"q-ml-md q-mt-md"})):i("",!0),C.value&&C.value.length?(t(),o("div",Ne,[(t(!0),o(g,null,x(C.value,(e,f)=>(t(),o("div",{key:f},[s(_e,{separator:""},{default:d(()=>[s(Z,null,{default:d(()=>[s(q,null,{default:d(()=>[a("div",qe,[s(O,{name:"folder",size:"24px"}),U(" "+c(e.key)+"s ",1)])]),_:2},1024)]),_:2},1024),(t(!0),o(g,null,x(e.data,(r,re)=>(t(),p(Z,{key:re},{default:d(()=>[s(q,{side:""},{default:d(()=>[a("a",{onClick:V=>P(r),class:"cursor"},[F(r.file_file_name)?(t(),o("img",{key:0,src:r.file_file_uri.thumb.uri,style:{"max-height":"64px","max-width":"100%"},class:"shadow-1"},null,8,Ue)):i("",!0),F(r.file_file_name)?i("",!0):(t(),o("div",Oe,[s(O,{name:"description",size:"40px"})]))],8,Se)]),_:2},1024),s(q,null,{default:d(()=>[s(ee,null,{default:d(()=>[a("a",{onClick:V=>P(r)},[a("a",{onClick:V=>P(r),class:"link"},c(r.type),9,Be),U(" - "),a("small",null,[a("em",null,c(r.name),1)])],8,Ae),y(b).screen.lt.sm&&r.expiry_date?(t(),o("div",Le,"Expires: "+c(r.expiry_date),1)):i("",!0)]),_:2},1024),s(ee,{caption:""},{default:d(()=>[U(" Uploaded by "+c(r.user.fullname)+" ",1),a("div",null,"Last updated: "+c(y(Ce)(r.created_at)),1)]),_:2},1024),y(b).screen.lt.sm?(t(),o("div",Te,[v.disabled?i("",!0):(t(),p(te,{key:0,flat:""},{default:d(()=>[s(_,{onClick:V=>W(r),flat:"",color:"grey"},{default:d(()=>[s(O,{name:"edit"})]),_:2},1032,["onClick"]),s(_,{onClick:V=>J(r),icon:"delete",title:"Remove attachment?",flat:"",color:"grey"},null,8,["onClick"])]),_:2},1024))])):i("",!0)]),_:2},1024),y(b).screen.gt.xs?(t(),p(q,{key:0,side:""},{default:d(()=>[r.expiry_date?(t(),o("span",Ee,"Expires: "+c(r.expiry_date),1)):i("",!0)]),_:2},1024)):i("",!0),y(b).screen.gt.xs?(t(),p(q,{key:1,side:""},{default:d(()=>[v.disabled?i("",!0):(t(),p(te,{key:0,flat:""},{default:d(()=>[s(_,{onClick:V=>W(r),flat:"",color:"grey"},{default:d(()=>[s(O,{name:"edit"})]),_:2},1032,["onClick"]),s(_,{onClick:V=>J(r),icon:"delete",title:"Remove attachment?",flat:"",color:"grey"},null,8,["onClick"])]),_:2},1024))]),_:2},1024)):i("",!0)]),_:2},1024))),128))]),_:2},1024)]))),128))])):i("",!0),v.disabled?i("",!0):(t(),p(G,{key:2},{default:d(()=>[!k.value&&!D.value?(t(),o("div",Pe,[s(_,{onClick:l[7]||(l[7]=e=>[u.type="",k.value=!k.value]),label:"Upload new",icon:"add_circle",color:"primary",outline:""})])):i("",!0),!I.value&&k.value?(t(),o("div",Ge,[u.type?i("",!0):(t(),o("div",Me,[Re,a("div",ze,[N("Identification")?(t(),o("div",je,[Fe,a("ul",null,[(t(!0),o(g,null,x(h.filter(e=>e.category==="Identification"),(e,f)=>(t(),o("li",{key:f},[a("a",{onClick:r=>u.type=e.value,class:"link"},c(e.label),9,Je)]))),128))])])):i("",!0),N("NDIS")?(t(),o("div",We,[Ke,a("ul",null,[(t(!0),o(g,null,x(h.filter(e=>e.category==="NDIS"),(e,f)=>(t(),o("li",{key:f},[a("a",{onClick:r=>u.type=e.value,class:"link"},c(e.label),9,He)]))),128))])])):i("",!0),N("Insurance")?(t(),o("div",Xe,[Ye,a("ul",null,[(t(!0),o(g,null,x(h.filter(e=>e.category==="Insurance"),(e,f)=>(t(),o("li",{key:f},[a("a",{onClick:r=>u.type=e.value,class:"link"},c(e.label),9,Ze)]))),128))])])):i("",!0),N("Purchases")?(t(),o("div",et,[tt,a("ul",null,[(t(!0),o(g,null,x(h.filter(e=>e.category==="Purchases"),(e,f)=>(t(),o("li",{key:f},[a("a",{onClick:r=>u.type=e.value,class:"link"},c(e.label),9,lt)]))),128))])])):i("",!0),N("Other")?(t(),o("div",at,[st,a("ul",null,[(t(!0),o(g,null,x(h.filter(e=>e.category==="Other"),(e,f)=>(t(),o("li",{key:f},[a("a",{onClick:r=>u.type=e.value,class:"link"},c(e.label),9,ot)]))),128))])])):i("",!0)])])),u.type?(t(),o("div",nt,[it,a("div",rt,[a("div",dt,[s(Y,{modelValue:u.type,"onUpdate:modelValue":l[8]||(l[8]=e=>u.type=e),label:"Type",options:h,"emit-value":"","map-options":"",error:y(E).type.$invalid,onInput:l[9]||(l[9]=e=>y(E).type.$touch())},null,8,["modelValue","error"])]),a("div",ut,[s(se,{modelValue:u.expiry_date,"onUpdate:modelValue":l[10]||(l[10]=e=>u.expiry_date=e),label:"Expiry Date"},null,8,["modelValue"])])]),s(M,{modelValue:u.name,"onUpdate:modelValue":l[11]||(l[11]=e=>u.name=e),label:`${v.label} name`,disabled:I.value,loading:I.value,class:"hidden"},null,8,["modelValue","label","disabled","loading"]),a("div",ct,[s(he,{color:"grey-7",url:y(L).url,headers:y(L).headers,onUploaded:ie,label:"Upload document","auto-expand":"","auto-upload":"",accept:y(L).documents,"field-name":y(L).fieldName},null,8,["url","headers","accept","field-name"]),a("div",mt,"All "+c(v.label)+"s must be in PDF or JPEG format.",1),a("div",vt,[s(_,{onClick:l[12]||(l[12]=e=>[k.value=!1,Object.assign(u,T)]),label:"Cancel",color:"secondary",class:"q-mr-xs"}),s(_,{onClick:l[13]||(l[13]=e=>oe()),disable:y(E).$invalid,label:"Save",color:"primary"},null,8,["disable"])])])])):i("",!0)])):i("",!0)]),_:1}))])],2)]),_:1},8,["class"]))}});export{qt as _};
