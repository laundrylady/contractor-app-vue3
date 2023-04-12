import{A as re,i as de,r as I,B as ue,o as ce,m as t,K as p,L as n,M as P,q as l,ai as c,y as i,l as s,Q as W,R as U,n as o,G as K,S as _,N as G,ae as me,aj as ve,F as g,b1 as C,U as y,t as H,O as M}from"./index.7da93179.js";import{Q as ye,a as fe}from"./QToolbarTitle.8a26e038.js";import{Q as X}from"./QSelect.0342b451.js";import{Q as Y,a as q}from"./QItem.642560fa.js";import{Q as Z}from"./rtl.ba9e3bff.js";import{Q as ee}from"./QBtnGroup.17d5a1bd.js";import{Q as pe}from"./QList.709f4980.js";import{Q as _e}from"./QUploader.f9ddc267.js";import{C as te}from"./ClosePopup.42f5b568.js";import{u as he,r as le}from"./index.esm.0811bb15.js";import{u as be}from"./use-quasar.41dfdbfa.js";import{a as A}from"./axios.07c7c7d9.js";import{N as ke}from"./NoRecords.0d3bf894.js";import{u as B}from"./debug.9f3fb657.js";import{z as L,d as R,g as ge,f as Ce,a as xe}from"./help.4068c5a1.js";import{_ as ae}from"./DateField.87b7069c.js";const Ve={class:"text-h3"},$e={class:"overflow-hidden"},Ie={key:0},Qe={class:"row q-col-gutter-md"},De={class:"col-xs-12 col-sm-6"},we={key:1},Ne={class:"text-h6"},qe=["onClick"],Se=["src"],Ue=["onClick"],Ae=["onClick"],Be={key:0,class:"text-caption"},Le={key:0,class:"q-mt-sm"},Oe={key:0},Te={key:0},Ee={key:1,class:"q-pa-md bg-grey-2 animated fadeIn"},Pe={key:0},Ge=l("div",{class:"text-h6 text-grey-7 q-mb-md"},"Choose a document type to upload: ",-1),Me={class:"row q-col-gutter-md"},Re={key:0,class:"col-sm-4"},je=l("strong",{class:"text-grey-7"},"Identification",-1),ze=["onClick"],Fe={key:1,class:"col-sm-4"},Je=l("strong",{class:"text-grey-7"},"NDIS",-1),We=["onClick"],Ke={key:2,class:"col-sm-4"},He=l("strong",{class:"text-grey-7"},"Insurance",-1),Xe=["onClick"],Ye={key:3,class:"col-sm-4"},Ze=l("strong",{class:"text-grey-7"},"Purchases",-1),et=["onClick"],tt={key:4,class:"col-sm-4"},lt=l("strong",{class:"text-grey-7"},"Other",-1),at=["onClick"],st={key:1,class:"animated fadeIn"},ot=l("div",{class:"text-h6 text-grey-8 q-mb-xs"},"Details:",-1),nt={class:"row q-col-gutter-md"},it={class:"col-xs-12 col-sm-6"},rt={class:"col-xs-12 col-sm-6"},dt={class:"q-mt-md"},ut={class:"q-mt-sm"},ct={class:"q-mt-md"},wt=re({__name:"GlobalAttachments",props:{attachable_type:null,attachable_id:null,disabled:{type:Boolean},type:null,nobox:{type:Boolean},label:null},setup(v){const Q=v,j=de("bus"),O={attachable_type:Q.attachable_type,attachable_id:Q.attachable_id.toString(),file_file_name:null,name:null,type:"",expiry_date:null,video_uri:null},b=be(),x=I(),r=ue(O),T=he({type:{required:le},file_file_name:{required:le}},r),V=I(!1),D=I(!1),m=I(),w=I(!1),k=I(!1),h=[{category:"Identification",value:"Drivers Licence",label:"Drivers Licence"},{category:"Identification",value:"Medicare Card",label:"Medicare Card"},{category:"Other",value:"Generic Document",label:"Generic Document"},{category:"Insurance",value:"Certificate of Currency for Public Liability Insurance",label:"Certificate of Currency for Public Liability Insurance"},{category:"NDIS",value:"NDIS Workers Clearance Certificate",label:"NDIS Workers Clearance Certificate"},{category:"Insurance",value:"Insurance Claim",label:"Insurance Claim"}],z=()=>{Q.attachable_type==="Team"&&j.emit("getTeam",{})},se=()=>{V.value=!0,b.loading.show({message:"Saving attachment..."}),A.post("/attachment",r).then(()=>{R("positive","Attachment added"),Object.assign(r,O),S(),V.value=!1,k.value=!1,b.loading.hide(),z()}).catch(u=>{B(u),V.value=!1,b.loading.hide()})},F=u=>{xe("This will remove the attachment").onOk(()=>{A.delete(`/attachment/${u.id}`).then(()=>{S(),R("positive","Attachment removed"),z()}).catch(a=>{B(a)})})},S=()=>{D.value=!0,A.post(`/attachment/fetch/${Q.attachable_type}/${Q.attachable_id}`).then(u=>{x.value=ge(u.data,"type"),D.value=!1}).catch(u=>{B(u),D.value=!1})},J=u=>{m.value=JSON.parse(JSON.stringify(u)),w.value=!0},oe=u=>{A.put(`/attachment/${u.id}`,u).then(()=>{m.value=!1,w.value=!1,S(),R("positive","Saved")}).catch(a=>{B(a)})},E=u=>{j.emit("view-file",{model:u,type:"attachment"})},N=u=>{let a=!1;return h.forEach(e=>{e.category===u&&(a=!0)}),a},ne=u=>{r.file_file_name=u.xhr.response,r.name||(r.name=u.xhr.response)};return ce(()=>{S()}),(u,a)=>(t(),p(W,{class:H({"no-shadow":v.nobox}),style:{"min-height":"110px"}},{default:n(()=>[v.label?(t(),p(P,{key:0},{default:n(()=>[l("div",Ve,c(v.label)+"s",1)]),_:1})):i("",!0),l("div",{class:H({"q-pa-none":v.nobox})},[l("div",$e,[s(ve,{modelValue:w.value,"onUpdate:modelValue":a[6]||(a[6]=e=>w.value=e)},{default:n(()=>[s(W,{class:"modal"},{default:n(()=>[s(ye,{class:"bg-primary text-white"},{default:n(()=>[s(fe,null,{default:n(()=>[U(c(v.label||"Document")+"s",1),m.value.type?(t(),o("span",Ie," - "+c(m.value.type),1)):i("",!0)]),_:1}),K(s(_,{flat:"",round:"",dense:"",icon:"close"},null,512),[[te]])]),_:1}),s(P,null,{default:n(()=>[l("div",Qe,[s(X,{modelValue:m.value.type,"onUpdate:modelValue":a[0]||(a[0]=e=>m.value.type=e),label:`${v.label||"Document"} type`,options:h,"emit-value":"","map-options":"",class:"col-xs-12 col-sm-6"},null,8,["modelValue","label"]),l("div",De,[s(ae,{modelValue:m.value.expiry_date,"onUpdate:modelValue":a[1]||(a[1]=e=>m.value.expiry_date=e),label:"Expiry Date"},null,8,["modelValue"])])]),s(G,{type:"text",modelValue:m.value.name,"onUpdate:modelValue":a[2]||(a[2]=e=>m.value.name=e),label:"Name"},null,8,["modelValue"]),m.value.type==="Video"?(t(),p(G,{key:0,modelValue:m.value.video_uri,"onUpdate:modelValue":a[3]||(a[3]=e=>m.value.video_uri=e),label:"Enter the video URL"},null,8,["modelValue"])):i("",!0)]),_:1}),s(me,{class:"q-mt-md",align:"right"},{default:n(()=>[K(s(_,{onClick:a[4]||(a[4]=e=>[m.value=!1,w.value=!1]),color:"secondary",flat:"",label:"Cancel"},null,512),[[te]]),s(_,{onClick:a[5]||(a[5]=e=>oe(m.value)),color:"primary",label:"Update"})]),_:1})]),_:1})]),_:1},8,["modelValue"]),(!x.value||!x.value.length)&&!k.value&&!D.value?(t(),p(ke,{key:0,class:"q-ml-md q-mt-md"})):i("",!0),x.value&&x.value.length?(t(),o("div",we,[(t(!0),o(g,null,C(x.value,(e,f)=>(t(),o("div",{key:f},[s(pe,{separator:""},{default:n(()=>[s(Y,null,{default:n(()=>[s(q,null,{default:n(()=>[l("div",Ne,[s(M,{name:"folder",size:"24px"}),U(" "+c(e.key)+"s ",1)])]),_:2},1024)]),_:2},1024),(t(!0),o(g,null,C(e.data,(d,ie)=>(t(),p(Y,{key:ie},{default:n(()=>[s(q,{side:""},{default:n(()=>[l("a",{onClick:$=>E(d),class:"cursor"},[l("img",{src:d.file_file_uri.thumb.uri,style:{"max-height":"64px","max-width":"100%"},class:"shadow-1"},null,8,Se)],8,qe)]),_:2},1024),s(q,null,{default:n(()=>[s(Z,null,{default:n(()=>[l("a",{onClick:$=>E(d)},[l("a",{onClick:$=>E(d),class:"link"},c(d.type),9,Ae),U(" - "),l("small",null,[l("em",null,c(d.name),1)])],8,Ue),y(b).screen.lt.sm&&d.expiry_date?(t(),o("div",Be,"Expires: "+c(d.expiry_date),1)):i("",!0)]),_:2},1024),s(Z,{caption:""},{default:n(()=>[U(" Uploaded by "+c(d.user.fullname)+" ",1),l("div",null,"Last updated: "+c(y(Ce)(d.created_at)),1)]),_:2},1024),y(b).screen.lt.sm?(t(),o("div",Le,[v.disabled?i("",!0):(t(),p(ee,{key:0,flat:""},{default:n(()=>[s(_,{onClick:$=>J(d),flat:"",color:"grey"},{default:n(()=>[s(M,{name:"edit"})]),_:2},1032,["onClick"]),s(_,{onClick:$=>F(d),icon:"delete",title:"Remove attachment?",flat:"",color:"grey"},null,8,["onClick"])]),_:2},1024))])):i("",!0)]),_:2},1024),y(b).screen.gt.xs?(t(),p(q,{key:0,side:""},{default:n(()=>[d.expiry_date?(t(),o("span",Oe,"Expires: "+c(d.expiry_date),1)):i("",!0)]),_:2},1024)):i("",!0),y(b).screen.gt.xs?(t(),p(q,{key:1,side:""},{default:n(()=>[v.disabled?i("",!0):(t(),p(ee,{key:0,flat:""},{default:n(()=>[s(_,{onClick:$=>J(d),flat:"",color:"grey"},{default:n(()=>[s(M,{name:"edit"})]),_:2},1032,["onClick"]),s(_,{onClick:$=>F(d),icon:"delete",title:"Remove attachment?",flat:"",color:"grey"},null,8,["onClick"])]),_:2},1024))]),_:2},1024)):i("",!0)]),_:2},1024))),128))]),_:2},1024)]))),128))])):i("",!0),v.disabled?i("",!0):(t(),p(P,{key:2},{default:n(()=>[!k.value&&!D.value?(t(),o("div",Te,[s(_,{onClick:a[7]||(a[7]=e=>[r.type="",k.value=!k.value]),label:"Upload new",icon:"add_circle",color:"primary",outline:""})])):i("",!0),!V.value&&k.value?(t(),o("div",Ee,[r.type?i("",!0):(t(),o("div",Pe,[Ge,l("div",Me,[N("Identification")?(t(),o("div",Re,[je,l("ul",null,[(t(!0),o(g,null,C(h.filter(e=>e.category==="Identification"),(e,f)=>(t(),o("li",{key:f},[l("a",{onClick:d=>r.type=e.value,class:"link"},c(e.label),9,ze)]))),128))])])):i("",!0),N("NDIS")?(t(),o("div",Fe,[Je,l("ul",null,[(t(!0),o(g,null,C(h.filter(e=>e.category==="NDIS"),(e,f)=>(t(),o("li",{key:f},[l("a",{onClick:d=>r.type=e.value,class:"link"},c(e.label),9,We)]))),128))])])):i("",!0),N("Insurance")?(t(),o("div",Ke,[He,l("ul",null,[(t(!0),o(g,null,C(h.filter(e=>e.category==="Insurance"),(e,f)=>(t(),o("li",{key:f},[l("a",{onClick:d=>r.type=e.value,class:"link"},c(e.label),9,Xe)]))),128))])])):i("",!0),N("Purchases")?(t(),o("div",Ye,[Ze,l("ul",null,[(t(!0),o(g,null,C(h.filter(e=>e.category==="Purchases"),(e,f)=>(t(),o("li",{key:f},[l("a",{onClick:d=>r.type=e.value,class:"link"},c(e.label),9,et)]))),128))])])):i("",!0),N("Other")?(t(),o("div",tt,[lt,l("ul",null,[(t(!0),o(g,null,C(h.filter(e=>e.category==="Other"),(e,f)=>(t(),o("li",{key:f},[l("a",{onClick:d=>r.type=e.value,class:"link"},c(e.label),9,at)]))),128))])])):i("",!0)])])),r.type?(t(),o("div",st,[ot,l("div",nt,[l("div",it,[s(X,{modelValue:r.type,"onUpdate:modelValue":a[8]||(a[8]=e=>r.type=e),label:"Type",options:h,"emit-value":"","map-options":"",error:y(T).type.$invalid,onInput:a[9]||(a[9]=e=>y(T).type.$touch())},null,8,["modelValue","error"])]),l("div",rt,[s(ae,{modelValue:r.expiry_date,"onUpdate:modelValue":a[10]||(a[10]=e=>r.expiry_date=e),label:"Expiry Date"},null,8,["modelValue"])])]),s(G,{modelValue:r.name,"onUpdate:modelValue":a[11]||(a[11]=e=>r.name=e),label:`${v.label} name`,disabled:V.value,loading:V.value,class:"hidden"},null,8,["modelValue","label","disabled","loading"]),l("div",dt,[s(_e,{color:"grey-7",url:y(L).url,headers:y(L).headers,onUploaded:ne,label:"Upload document","auto-expand":"","auto-upload":"",accept:y(L).documents,"field-name":y(L).fieldName},null,8,["url","headers","accept","field-name"]),l("div",ut,"All "+c(v.label)+"s must be in PDF or JPEG format.",1),l("div",ct,[s(_,{onClick:a[12]||(a[12]=e=>[k.value=!1,Object.assign(r,O)]),label:"Cancel",color:"secondary",class:"q-mr-xs"}),s(_,{onClick:a[13]||(a[13]=e=>se()),disable:y(T).$invalid,label:"Save",color:"primary"},null,8,["disable"])])])])):i("",!0)])):i("",!0)]),_:1}))])],2)]),_:1},8,["class"]))}});export{wt as _};
