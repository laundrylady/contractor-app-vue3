import{A as K,r as V,B as W,i as X,I as ae,o as Y,E as se,m as _,K as Q,L as d,l as a,R as S,ai as P,G as h,S as k,ag as oe,M as te,U as m,q as r,N as b,n as w,O as M,y as v,b2 as O,ae as de,Q as Z,aj as ne,J as re,F as ie,t as ue}from"./index.7da93179.js";import{a as me,Q as E}from"./QBreadcrumbs.96094532.js";import{Q as ee}from"./QSpace.2d911a61.js";import{Q as A}from"./QSelect.0342b451.js";import{Q as pe}from"./QHeader.9f36f572.js";import{Q as be,a as I}from"./QTable.01150601.js";import{a as L,Q as G}from"./QItem.642560fa.js";import{Q as _e}from"./QList.709f4980.js";import{Q as fe}from"./QMenu.00781621.js";import{Q as ge}from"./QPage.e25f8b02.js";import{Q as ce,a as ve}from"./QLayout.bec178d3.js";import{C as D}from"./ClosePopup.42f5b568.js";import{a as B}from"./axios.07c7c7d9.js";import{_ as ye}from"./StateField.ccb757aa.js";import{_ as Ve}from"./PostcodeRegionDisplay.128d2d33.js";import{Q as $e,a as we}from"./QToolbarTitle.8a26e038.js";import{_ as ke}from"./ndis_heart.0820b9e2.js";import{u as Qe,r as c,a as U}from"./index.esm.0811bb15.js";import{u as qe}from"./use-quasar.41dfdbfa.js";import{u as N}from"./debug.9f3fb657.js";import{d as H,o as j,s as Ce,r as Ue,a as Pe}from"./help.4068c5a1.js";import{_ as F,a as z}from"./CountryField.94d5511a.js";import{_ as J}from"./PostcodeRegionField.ad7180b3.js";import{u as Ae}from"./vue-i18n.runtime.esm-bundler.dc0339a7.js";import"./rtl.ba9e3bff.js";import"./format.3e32b8d9.js";import"./QResizeObserver.66f1c4a6.js";import"./QMarkupTable.f781861b.js";import"./QLinearProgress.6e390987.js";import"./use-fullscreen.62410448.js";import"./QBadge.d2d220ed.js";const Be={class:"row q-col-gutter-md"},Ne={class:"row q-col-gutter-md"},Te={key:0,class:"row q-col-gutter-md"},Ie={class:"col-xs-12 col-sm-6"},Se={key:0,class:"q-mb-md"},he={key:0,class:"text-negative"},De={key:1,class:"text-positive"},Re={class:"q-mr-sm"},Me={key:1},Oe={key:2,class:"row q-col-gutter-md"},xe=r("img",{src:ke,style:{height:"32px"}},null,-1),Ee={class:"row q-col-gutter-md"},Le={class:"col-xs-6"},Ge={class:"col-xs-6"},He=r("div",{class:"q-mt-lg q-mb-sm text-h6"},"Pickup Address",-1),je={class:"row q-col-gutter-md"},Fe={class:"q-mt-sm"},ze=r("div",{class:"text-h6 q-mt-lg q-mb-sm"},"Postal Address (if different from Pickup Address)",-1),Je={class:"row q-col-gutter-md"},Ke=K({__name:"TeamCreate",setup(le){const y=V(!1),l=W({type:null,name:null,abn:null,abn_verified:!1,first_name:null,last_name:null,email:null,mobile:null,ndis:!1,ndis_number:null,ndis_type:null,aged_care_client_number:null,finance_phone:null,finance_email:null,other_phone:null,pickup_instructions:null,atl:!0,address1:null,address2:null,suburb_postcode_region_id:null,country_id:13,lat:null,lng:null,postal_address1:null,postal_address2:null,postal_suburb_postcode_region_id:null,postal_country_id:null,postal_lat:null,postal_lng:null,payment_terms:null,owing_no_booking:!1}),$=V(!1),q=V(!1),f=V(),n=X("bus"),C=qe(),p=ae(),g={type:{required:c},name:{requiredIf:U(()=>["Business","Aged Care","Sporting Group"].indexOf(l.type||"")!==-1)},abn:{requiredIf:U(()=>["Business","Aged Care"].indexOf(l.type||"")!==-1)},first_name:{required:c},last_name:{required:c},email:{required:c},mobile:{required:c},ndis_number:{requiredIf:U(()=>l.type==="NDIS")},ndis_type:{requiredIf:U(()=>l.type==="NDIS")},aged_care_client_number:{requiredIf:U(()=>l.type==="Aged Care")},address2:{required:c},suburb_postcode_region_id:{required:c},country_id:{required:c},payment_terms:{required:c}},i=Qe(g,l),R=()=>{$.value=!0,B.post("/team",l).then(o=>{H("positive","Customer created"),p.push({name:"team-dashboard",params:{id:o.data.id}}),y.value=!1,$.value=!1}).catch(o=>{$.value=!1,N(o)})},u=()=>{l.email&&B.post("/user/checkemail/0",{email:l.email}).then(o=>{o.data.found[0].count>0&&(l.email=null,H("negative","That email address is already in use!"))}).catch(o=>{N(o)})},t=()=>{l.abn||(q.value=!1),C.loading.show({message:"Verifying ABN with the ATO..."}),B.post("/verifynest/verifyabn",{keyword:l.abn}).then(o=>{q.value=!o.data.data.Message,l.abn_verified=!o.data.data.Message,f.value=o.data.data,C.loading.hide()}).catch(o=>{C.loading.hide(),N(o)})};return Y(()=>{n.on("newTeam",()=>{y.value=!0})}),se(()=>{n.off("newTeam")}),(o,e)=>(_(),Q(ne,{modelValue:y.value,"onUpdate:modelValue":e[25]||(e[25]=s=>y.value=s)},{default:d(()=>[a(Z,{class:"modal"},{default:d(()=>[a($e,null,{default:d(()=>[a(we,null,{default:d(()=>[S(P(o.$t("team.create")),1)]),_:1}),a(ee),h(a(k,{icon:"close",flat:"",round:"",dense:""},null,512),[[D]])]),_:1}),a(oe),a(te,null,{default:d(()=>[a(A,{modelValue:l.type,"onUpdate:modelValue":e[0]||(e[0]=s=>l.type=s),error:m(i).type.$invalid,label:o.$t("team.type"),options:["Residential","Business","NDIS","Aged Care","DVA","Sporting Group","Other"]},null,8,["modelValue","error","label"]),r("div",Be,[a(b,{modelValue:l.first_name,"onUpdate:modelValue":e[1]||(e[1]=s=>l.first_name=s),label:o.$t("team.firstName"),error:m(i).first_name.$invalid,class:"col-xs-12 col-sm-6"},null,8,["modelValue","label","error"]),a(b,{modelValue:l.last_name,"onUpdate:modelValue":e[2]||(e[2]=s=>l.last_name=s),label:o.$t("team.lastName"),error:m(i).last_name.$invalid,class:"col-xs-12 col-sm-6"},null,8,["modelValue","label","error"])]),r("div",Ne,[a(b,{modelValue:l.email,"onUpdate:modelValue":e[3]||(e[3]=s=>l.email=s),label:o.$t("team.email"),error:m(i).email.$invalid,class:"col-xs-12 col-sm-6",onBlur:e[4]||(e[4]=s=>u())},null,8,["modelValue","label","error"]),a(b,{modelValue:l.mobile,"onUpdate:modelValue":e[5]||(e[5]=s=>l.mobile=s),label:o.$t("team.mobile"),error:m(i).mobile.$invalid,mask:"#### ### ###","unmasked-value":"",class:"col-xs-12 col-sm-6"},null,8,["modelValue","label","error"])]),["Business","Aged Care","Sporting Group"].indexOf(l.type||"")!==-1?(_(),w("div",Te,[a(b,{modelValue:l.name,"onUpdate:modelValue":e[6]||(e[6]=s=>l.name=s),label:o.$t("team.teamName"),error:m(i).name.$invalid,class:"col-xs-12 col-sm-6"},null,8,["modelValue","label","error"]),r("div",Ie,[a(b,{modelValue:l.abn,"onUpdate:modelValue":e[8]||(e[8]=s=>l.abn=s),label:o.$t("team.abn"),error:m(i).abn.$invalid},{append:d(()=>[l.abn_verified?(_(),Q(M,{key:0,name:"check",color:"positive"})):v("",!0),l.abn?(_(),Q(k,{key:1,onClick:e[7]||(e[7]=s=>t()),color:"primary",label:"Verify",flat:""})):v("",!0)]),_:1},8,["modelValue","label","error"]),f.value?(_(),w("div",Se,[f.value.Message?(_(),w("div",he,P(f.value.Message),1)):v("",!0),f.value.Message?v("",!0):(_(),w("div",De,[r("span",Re,"ABN Registered to: "+P(f.value.EntityName),1)]))])):v("",!0)])])):v("",!0),l.type==="Aged Care"?(_(),w("div",Me,[a(b,{modelValue:l.aged_care_client_number,"onUpdate:modelValue":e[9]||(e[9]=s=>l.aged_care_client_number=s),label:o.$t("team.agedCareClientNumber"),error:m(i).aged_care_client_number.$invalid},null,8,["modelValue","label","error"])])):v("",!0),l.type==="NDIS"?(_(),w("div",Oe,[a(b,{modelValue:l.ndis_number,"onUpdate:modelValue":e[10]||(e[10]=s=>l.ndis_number=s),label:o.$t("team.ndisNumber"),error:m(i).ndis_number.$invalid,class:"col-xs-12 col-sm-6"},{prepend:d(()=>[xe]),_:1},8,["modelValue","label","error"]),a(A,{modelValue:l.ndis_type,"onUpdate:modelValue":e[11]||(e[11]=s=>l.ndis_type=s),label:o.$t("team.ndisType"),error:m(i).ndis_type.$invalid,options:["Self managed","Plan managed","NDIA registered"],class:"col-xs-12 col-sm-6"},null,8,["modelValue","label","error"])])):v("",!0),r("div",Ee,[r("div",Le,[a(A,{modelValue:l.payment_terms,"onUpdate:modelValue":e[12]||(e[12]=s=>l.payment_terms=s),error:m(i).payment_terms.$invalid,label:o.$t("team.paymentTerms"),options:["Credit Card","Bank Transfer"]},null,8,["modelValue","error","label"])]),r("div",Ge,[a(O,{modelValue:l.owing_no_booking,"onUpdate:modelValue":e[13]||(e[13]=s=>l.owing_no_booking=s),label:o.$t("team.owingNoBooking")},null,8,["modelValue","label"])])]),He,a(F,{model:l,addressfields:{address1:"address1",address2:"address2",suburb_postcode_region_id:"suburb_postcode_region_id",lat:"lat",lng:"lng"},placeholder:o.$t("address.search")},null,8,["model","placeholder"]),a(b,{modelValue:l.address1,"onUpdate:modelValue":e[14]||(e[14]=s=>l.address1=s),label:o.$t("address.line1"),"bottom-slots":""},null,8,["modelValue","label"]),a(b,{modelValue:l.address2,"onUpdate:modelValue":e[15]||(e[15]=s=>l.address2=s),error:m(i).address2.$invalid,label:o.$t("address.line2")},null,8,["modelValue","error","label"]),r("div",je,[a(J,{modelValue:l.suburb_postcode_region_id,"onUpdate:modelValue":e[16]||(e[16]=s=>l.suburb_postcode_region_id=s),invalid:m(i).suburb_postcode_region_id.$invalid,label:o.$t("address.suburb"),class:"col-xs-12 col-sm-6"},null,8,["modelValue","invalid","label"]),a(z,{modelValue:l.country_id,"onUpdate:modelValue":e[17]||(e[17]=s=>l.country_id=s),label:o.$t("address.country"),class:"col-xs-12 col-sm-6",invalid:m(i).country_id.$invalid},null,8,["modelValue","label","invalid"])]),a(b,{modelValue:l.pickup_instructions,"onUpdate:modelValue":e[18]||(e[18]=s=>l.pickup_instructions=s),label:o.$t("team.pickupInstructions"),autogrow:"",type:"textarea",class:"q-mt-md"},null,8,["modelValue","label"]),r("div",Fe,[a(O,{modelValue:l.atl,"onUpdate:modelValue":e[19]||(e[19]=s=>l.atl=s),label:o.$t("team.atl")},null,8,["modelValue","label"])]),ze,a(F,{model:l,addressfields:{address1:"postal_address1",address2:"postal_address2",suburb_postcode_region_id:"postal_suburb_postcode_region_id",lat:"postal_lat",lng:"postal_lng"},placeholder:o.$t("address.search")},null,8,["model","placeholder"]),a(b,{modelValue:l.postal_address1,"onUpdate:modelValue":e[20]||(e[20]=s=>l.postal_address1=s),label:o.$t("address.line1"),"bottom-slots":""},null,8,["modelValue","label"]),a(b,{modelValue:l.postal_address2,"onUpdate:modelValue":e[21]||(e[21]=s=>l.postal_address2=s),label:o.$t("address.line2")},null,8,["modelValue","label"]),r("div",Je,[a(J,{modelValue:l.postal_suburb_postcode_region_id,"onUpdate:modelValue":e[22]||(e[22]=s=>l.postal_suburb_postcode_region_id=s),label:o.$t("address.suburb"),class:"col-xs-12 col-sm-6"},null,8,["modelValue","label"]),a(z,{modelValue:l.postal_country_id,"onUpdate:modelValue":e[23]||(e[23]=s=>l.postal_country_id=s),label:o.$t("address.country"),class:"col-xs-12 col-sm-6"},null,8,["modelValue","label"])])]),_:1}),a(de,{align:"right"},{default:d(()=>[h(a(k,{label:"Cancel",flat:"",color:"secondary"},null,512),[[D]]),a(k,{disable:$.value||m(i).$invalid,label:"Save",color:"primary",onClick:e[24]||(e[24]=s=>R())},null,8,["disable"])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),We={class:"q-pl-md q-pt-sm q-pr-md q-pb-sm flex items-center",style:{"padding-top":"11px"}},Xe=["src"],Ye={class:"text-h6",style:{"line-height":"1.1rem"}},Ze={class:"text-grey"},Nl=K({__name:"TeamManagement",setup(le){const y=Ae(),l=X("bus"),$=V(),q=V(null),f=V(!1),n=W({keyword:null,type:null,state:null,invalid_address:!1,status:null}),C=[{name:"name",label:y.t("team.nameColumn"),align:"left",field:"name",sortable:!0},{name:"type",label:"Type",align:"left",field:"type",sortable:!0},{name:"suburb_postcode_region_id",sortable:!1,label:`Home ${y.t("address.suburb")}`,field:"suburb_postcode_region_id",align:"left"},{name:"actions",sortable:!1,label:"Actions",field:"actions"}],p=V({page:1,rowsNumber:j(),rowsPerPage:j(),sortBy:"name",descending:!1}),g=(u=null)=>{let t,o,e,s;u&&u.pagination?(t=u.pagination.page,o=u.pagination.rowsPerPage,e=u.pagination.sortBy,s=u.pagination.descending):(t=p.value.page,o=p.value.rowsPerPage,e=p.value.sortBy,s=p.value.descending),f.value=!0,B.post(`/team/datatable/${t}`,{sortBy:e,sort_order:s?"desc":"asc",skip:t,rowsPerPage:o,keyword:n.keyword,type:n.type,state:n.state,invalid_address:n.invalid_address,status:n.status}).then(T=>{var x;Object.assign(p,{page:t,rowsPerPage:o,sortBy:e,descending:s}),$.value=T.data.rows,f.value=!1,Ce(o),p.value.rowsNumber=T.data.total,p.value.page=t,p.value.rowsPerPage=o,p.value.sortBy=e,p.value.descending=s,u&&((x=q.value)==null||x.scrollIntoView({behavior:"smooth",block:"center"}))}).catch(T=>{N(T)})},i=()=>{l.emit("newTeam")},R=u=>{Pe(`This will remove the ${y.t("team.name").toLowerCase()}`).onOk(()=>{B.delete(`/team/${u}`).then(()=>{g()}).catch(t=>{N(t)})})};return Y(()=>{g()}),(u,t)=>{const o=re("router-link");return _(),w(ie,null,[a(Ke),a(ce,{view:"lHh LpR fFf",container:"",class:"layout-height"},{default:d(()=>[a(pe,{class:ue({"page-title text-black":!u.$q.dark.isActive,"bg-dark":u.$q.dark.isActive}),bordered:""},{default:d(()=>[r("div",We,[a(me,null,{separator:d(()=>[a(M,{size:"1.5em",name:"chevron_right"})]),default:d(()=>[a(E,{label:"Home",icon:"home",to:{name:"appDashboard"}}),a(E,{label:u.$t("team.namePlural")},null,8,["label"])]),_:1}),a(b,{modelValue:n.keyword,"onUpdate:modelValue":t[0]||(t[0]=e=>n.keyword=e),debounce:500,placeholder:`Search ${u.$t("team.namePlural").toLowerCase()}`,dense:"",borderless:"",class:"q-ml-lg",clearable:""},{prepend:d(()=>[a(M,{name:"search"})]),_:1},8,["modelValue","placeholder"]),a(ee),a(A,{modelValue:n.status,"onUpdate:modelValue":[t[1]||(t[1]=e=>n.status=e),t[2]||(t[2]=e=>g(null))],options:[{label:"Active",value:"active"},{label:"Paused",value:"paused"},{label:"Archived",value:"archived"}],label:"Status",style:{width:"150px"},class:"q-mr-sm",clearable:"",dense:"",outlined:"","emit-value":"","map-options":""},null,8,["modelValue"]),a(A,{modelValue:n.type,"onUpdate:modelValue":[t[3]||(t[3]=e=>n.type=e),t[4]||(t[4]=e=>g(null))],label:"Customer Type",options:["Residential","Business","NDIS","Aged Care","DVA","Sporting Group","Other"],clearable:"",outlined:"",dense:"",style:{"min-width":"200px"},class:"q-mr-sm"},null,8,["modelValue"]),a(ye,{modelValue:n.state,"onUpdate:modelValue":[t[5]||(t[5]=e=>n.state=e),t[6]||(t[6]=e=>g(null))],label:"State",class:"q-mr-sm",dense:!0,outlined:!0},null,8,["modelValue"]),a(O,{modelValue:n.invalid_address,"onUpdate:modelValue":[t[7]||(t[7]=e=>n.invalid_address=e),t[8]||(t[8]=e=>g(null))],label:"Invalid address"},null,8,["modelValue"]),a(k,{onClick:t[9]||(t[9]=e=>i()),icon:"add",color:"primary",round:"",class:"q-ml-md"})])]),_:1},8,["class"]),a(ve,null,{default:d(()=>[a(ge,{padding:""},{default:d(()=>[r("div",{ref_key:"topRef",ref:q},null,512),a(Z,null,{default:d(()=>[a(be,{rows:$.value,columns:C,"row-key":"id",filter:n.keyword,loading:f.value,pagination:p.value,"onUpdate:pagination":t[10]||(t[10]=e=>p.value=e),onRequest:g,class:"no-shadow","rows-per-page-options":m(Ue),"wrap-cells":""},{"body-cell-id":d(e=>[a(I,{props:e},{default:d(()=>[r("img",{src:`/api/team/logo/${e.row.id}?fetch=original`,style:{"max-height":"50px"}},null,8,Xe)]),_:2},1032,["props"])]),"body-cell-name":d(e=>[a(I,{props:e},{default:d(()=>[r("div",Ye,[a(o,{to:{name:"team-dashboard",params:{id:e.row.id}},class:"link"},{default:d(()=>[S(P(e.row.name),1)]),_:2},1032,["to"])]),r("div",Ze,P(e.row.email),1)]),_:2},1032,["props"])]),"body-cell-suburb_postcode_region_id":d(e=>[a(I,{props:e},{default:d(()=>[e.row.suburbpostcoderegion?(_(),Q(Ve,{key:0,postcoderegions:[e.row.suburbpostcoderegion]},null,8,["postcoderegions"])):v("",!0)]),_:2},1032,["props"])]),"body-cell-actions":d(e=>[a(I,{props:e},{default:d(()=>[a(k,{flat:"",icon:"more_vert"},{default:d(()=>[a(fe,null,{default:d(()=>[a(_e,null,{default:d(()=>[h((_(),Q(G,{clickable:"",to:{name:"team-edit",params:{id:e.row.id}}},{default:d(()=>[a(L,null,{default:d(()=>[S("Edit record")]),_:1})]),_:2},1032,["to"])),[[D]]),h((_(),Q(G,{clickable:"",onClick:s=>R(e.row.id)},{default:d(()=>[a(L,null,{default:d(()=>[S("Delete")]),_:1})]),_:2},1032,["onClick"])),[[D]])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["props"])]),_:1},8,["rows","filter","loading","pagination","rows-per-page-options"])]),_:1})]),_:1})]),_:1})]),_:1})],64)}}});export{Nl as default};
