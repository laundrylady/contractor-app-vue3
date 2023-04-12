import{A as N,r as g,o as K,w as Be,m as i,K as C,L as r,l as e,O as M,af as Ue,y as V,i as ce,f as Oe,Q as X,R as D,ai as c,G as F,S as q,ag as te,q as o,n as f,U as k,F as S,b1 as O,M as Z,ae as Ae,aj as Te,b3 as me,g as le,B as Le,E as Pe,J as oe,t as J,b2 as ze,bm as Re,k as Ee,s as Fe}from"./index.7da93179.js";import{a as Ne,Q as se}from"./QBreadcrumbs.96094532.js";import{Q as L}from"./QSpace.2d911a61.js";import{Q as H}from"./QMenu.00781621.js";import{Q as je}from"./QHeader.9f36f572.js";import{Q as Ge,a as Ie}from"./QItem.642560fa.js";import{Q as Je}from"./QList.709f4980.js";import{Q as re}from"./QCircularProgress.a2ed8130.js";import{Q as He}from"./QBtnGroup.17d5a1bd.js";import{Q as de}from"./QBadge.d2d220ed.js";import{Q as ne}from"./QLinearProgress.6e390987.js";import{Q as We}from"./QPage.e25f8b02.js";import{Q as Ke,a as Xe}from"./QLayout.bec178d3.js";import{C as W}from"./ClosePopup.42f5b568.js";import{_ as Ze}from"./code_thinking.ed37dda4.js";import{t as ea}from"./index.esm.78b71664.js";import{u as aa,r as ie}from"./index.esm.0811bb15.js";import{a as B,m as U}from"./axios.07c7c7d9.js";import{u as pe}from"./use-quasar.41dfdbfa.js";import{_ as ta}from"./PostcodeRegionField.ad7180b3.js";import{_ as la}from"./PostcodeRegionGroupField.98fd4636.js";import{a as oa,_ as sa}from"./OrderContractorManagement.783fe33b.js";import{Q as _e}from"./QSelect.0342b451.js";import{u as A}from"./debug.9f3fb657.js";import{a as ra,Q as da}from"./QToolbarTitle.8a26e038.js";import{Q as na}from"./QTime.1028d462.js";import{h as ia,E as ua,k as ca,j as ma,n as E,F as pa,q as _a}from"./help.4068c5a1.js";import{_ as va}from"./DateField.87b7069c.js";import{_ as fa}from"./PostcodeRegionDisplay.128d2d33.js";import{_ as ga}from"./UserAvatar.41db8b9e.js";import{a as ha,g as ya}from"./geolocation.17ee4622.js";import{o as ue}from"./helpers.84dd3d7a.js";import"./QResizeObserver.66f1c4a6.js";import"./format.3e32b8d9.js";import"./rtl.ba9e3bff.js";import"./TouchPan.cb35dc49.js";const ba=N({__name:"UserField",props:{modelValue:null,role:null,invalid:{type:Boolean},label:null,dark:{type:Boolean},outlined:{type:Boolean},disabled:{type:Boolean},multiple:{type:Boolean},dense:{type:Boolean},borderless:{type:Boolean},filled:{type:Boolean},placeholder:null,nowatch:{type:Boolean}},emits:["update:modelValue"],setup(p,{emit:Q}){const a=p,h=g(!1),y=g(),b=_=>{Q("update:modelValue",_)},w=(_,$)=>{_.length<2||(h.value=!0,B.post(`/user/index?role=${a.role}`,{keyword:_}).then(m=>{$(()=>{y.value=m.data.map(u=>({value:u.id,label:u.fullname})),h.value=!1})}).catch(m=>{h.value=!1,A(m)}))};return K(()=>{a.modelValue&&(Array.isArray(a.modelValue)&&a.modelValue.length||!Array.isArray(a.modelValue))&&B.get(`/user/${a.modelValue}`).then(_=>{Array.isArray(_.data)?(y.value=_.data.map($=>({value:$.id,label:$.fullname})),h.value=!1):(y.value=[{value:_.data.id,label:_.data.fullname}],h.value=!1)})}),Be(()=>a.modelValue,(_,$)=>{!a.nowatch&&_&&_!==$&&(Array.isArray(_)&&_.length||!Array.isArray(_))&&B.get(`/user/${_}`).then(m=>{y.value=[{value:m.data.id,label:m.data.fullname}]}).catch(m=>{A(m)})}),(_,$)=>(i(),C(_e,{label:p.label,"model-value":p.modelValue,"onUpdate:modelValue":b,options:y.value,onFilter:w,"use-input":"","emit-value":"","map-options":"",dark:p.dark,color:p.dark?"white":"",error:p.invalid,"hide-dropdown-icon":"","input-debounce":"350",autocomplete:"team-filter",outlined:p.outlined,disable:p.disabled,"use-chips":"",ref:"qSelectTeam",borderless:p.borderless,dense:p.dense,class:"q-pb-none",filled:p.filled,loading:h.value,multiple:p.multiple,placeholder:p.placeholder},{prepend:r(()=>[e(M,{name:"group",color:"info"})]),loading:r(()=>[h.value?(i(),C(Ue,{key:0})):V("",!0)]),_:1},8,["label","model-value","options","dark","color","error","outlined","disable","borderless","dense","filled","loading","multiple","placeholder"]))}}),ka=o("div",{class:"text-h7 q-mb-md"},"Please confirm the following details are correct:",-1),xa={class:"text-h6"},Va={key:0,class:"row q-col-gutter-md"},$a={class:"col-xs-12 col-sm-8"},qa={class:"row q-col-gutter-md q-mb-md"},Qa=o("div",{class:"q-mt-md"},"Products",-1),Ca={key:0,class:"q-mt-lg q-mb-md"},wa={class:"q-mb-md",style:{"min-height":"100px"}},Da={key:0,class:"q-mt-sm"},Ma={key:1,class:"text-negative q-mt-sm"},Ya={key:2,class:"text-negative q-mt-sm"},Sa={class:"col-xs-12 col-sm-4"},Ba=o("div",{class:"text-bold text-grey q-mb-xs"},"Agreed Pickup Time",-1),Ua=o("p",null,"The time below has been agreed upon by the customer and contractor.",-1),Oa=N({__name:"OrderMove",setup(p){const Q=pe(),a=g(),h=ce("bus"),y=g(!1),b=g(),w=()=>{a.value&&(Q.loading.show({message:"Updating booking..."}),B.put(`/order/${a.value.id}`,a.value).then(()=>{h.emit("orderMoved"),a.value=null,y.value=!1}).catch(m=>{A(m)}))},_=()=>{a.value&&(a.value.agreed_pickup_time=null)},$=()=>{a.value&&B.post("/order/contractorviability",{order_id:a.value.id,contractor_user_id:a.value.contractor_user_id,day:a.value.scheduled_pickup_date,time:a.value.agreed_pickup_time||a.value.scheduled_pickup_time}).then(m=>{b.value=m.data}).catch(m=>{A(m)})};return K(()=>{h.on("orderMove",m=>{a.value=m,a.value.scheduled_pickup_date=U(m.scheduled_pickup_date).format("DD/MM/YYYY"),b.value=null,$(),y.value=!0})}),Oe(()=>{h.off("orderMove")}),(m,u)=>(i(),C(Te,{modelValue:y.value,"onUpdate:modelValue":u[7]||(u[7]=v=>y.value=v)},{default:r(()=>[a.value?(i(),C(X,{key:0,class:"modal"},{default:r(()=>[e(da,null,{default:r(()=>[e(ra,null,{default:r(()=>[D(c(m.$t("order.name"))+" #"+c(a.value.display_id),1)]),_:1}),e(L),F(e(q,{round:"",dense:"",flat:"",icon:"close"},null,512),[[W]])]),_:1}),e(te),e(Z,null,{default:r(()=>[ka,o("div",xa,[e(M,{name:"group"}),D(" "+c(a.value.team.name),1)]),o("div",null,c(a.value.team.suburbpostcoderegion.locality)+" "+c(a.value.team.suburbpostcoderegion.state),1),e(te,{class:"q-mt-sm q-mb-sm"}),a.value.team_id?(i(),f("div",Va,[o("div",$a,[o("div",qa,[e(va,{modelValue:a.value.scheduled_pickup_date,"onUpdate:modelValue":u[0]||(u[0]=v=>a.value.scheduled_pickup_date=v),label:m.$t("order.scheduledPickupDate"),class:"col-xs-12 col-sm-6"},null,8,["modelValue","label"]),e(_e,{modelValue:a.value.scheduled_pickup_time,"onUpdate:modelValue":u[1]||(u[1]=v=>a.value.scheduled_pickup_time=v),label:m.$t("order.scheduledPickupTime"),options:k(ia),"emit-value":"","map-options":"",class:"col-xs-12 col-sm-6"},null,8,["modelValue","label","options"])]),Qa,(i(!0),f(S,null,O(a.value.productcategories,v=>(i(),f("div",{key:v.id},[v.meta?(i(),C(me,{key:0,modelValue:v.meta.pivot_active,"onUpdate:modelValue":P=>v.meta.pivot_active=P,label:v.name},null,8,["modelValue","onUpdate:modelValue","label"])):V("",!0)]))),128)),a.value.scheduled_pickup_time?(i(),f("div",Ca,[o("div",wa,[e(oa,{modelValue:a.value.contractor_user_id,"onUpdate:modelValue":u[2]||(u[2]=v=>a.value.contractor_user_id=v),team_id:a.value.team_id,scheduled_pickup_date:a.value.scheduled_pickup_date,scheduled_pickup_time:a.value.scheduled_pickup_time,reassign:!0,productcategories:a.value.productcategories},null,8,["modelValue","team_id","scheduled_pickup_date","scheduled_pickup_time","productcategories"])]),b.value&&b.value.roster?(i(),f("div",Da,[e(M,{name:"warning"}),D(" "+c(b.value.roster),1)])):V("",!0),b.value&&b.value.schedule?(i(),f("div",Ma,[e(M,{name:"warning"}),D(" "+c(b.value.schedule),1)])):V("",!0),b.value&&b.value.capacity?(i(),f("div",Ya,[e(M,{name:"warning"}),D(" "+c(b.value.capacity),1)])):V("",!0)])):V("",!0)]),o("div",Sa,[Ba,Ua,e(na,{modelValue:a.value.agreed_pickup_time,"onUpdate:modelValue":[u[3]||(u[3]=v=>a.value.agreed_pickup_time=v),u[4]||(u[4]=v=>$())],color:"secondary"},null,8,["modelValue"]),a.value.agreed_pickup_time?(i(),C(q,{key:0,class:"q-mt-sm",onClick:u[5]||(u[5]=v=>_()),label:"Clear pickup time",flat:"",size:"sm",color:"secondary"})):V("",!0)])])):V("",!0)]),_:1}),e(Ae,{align:"right"},{default:r(()=>[F(e(q,{label:"Cancel",flat:"",color:"secondary"},null,512),[[W]]),e(q,{onClick:u[6]||(u[6]=v=>w()),color:"primary",label:"Confirm changes"})]),_:1})]),_:1})):V("",!0)]),_:1},8,["modelValue"]))}}),Aa={class:"q-mb-sm"},Ta=N({__name:"OrderViewModal",props:{model:null},setup(p){return(Q,a)=>p.model.id?(i(),C(X,{key:0,class:"bg-transparent",flat:"",style:{"margin-top":"1px"}},{default:r(()=>[e(Z,null,{default:r(()=>[o("div",null,c(p.model.team.name),1),o("div",null,c(p.model.address2),1),o("div",null,c(p.model.team.suburbpostcoderegion.locality),1),o("div",Aa,c(p.model.team.suburbpostcoderegion.state)+" "+c(p.model.team.suburbpostcoderegion.postcode),1),(i(!0),f(S,null,O(p.model.productcategories,h=>{var y;return i(),f("span",{key:h.id},[(y=h.meta)!=null&&y.pivot_active?(i(),C(M,{key:0,name:h.icon,size:"20px",class:"q-mr-sm"},null,8,["name"])):V("",!0)])}),128))]),_:1})]),_:1})):V("",!0)}}),La={class:"q-pl-md q-pt-sm q-pr-md q-pb-sm flex items-center",style:{"padding-top":"11px"}},Pa={class:"q-pa-lg",style:{width:"500px"}},za=o("div",{class:"text-h6"},"Suburb Group",-1),Ra=o("div",{class:"text-h6"},"Individual Suburb",-1),Ea={key:0,class:"text-center text-grey",style:{"margin-top":"200px"}},Fa=o("div",{class:"q-mb-lg"},[o("img",{src:Ze,style:{"max-height":"150px"}})],-1),Na={class:"flex items-center"},ja={class:"q-mr-lg text-h6"},Ga={key:1,class:"flex"},Ia={class:"flex items-center"},Ja={class:"q-ml-sm"},Ha={class:"text-bold",style:{"line-height":"0.9rem"}},Wa={class:"q-mt-sm"},Ka={class:"text-center q-pa-xs"},Xa={class:"text-center"},Za=["onMouseenter"],et={style:{display:"flex","justify-content":"space-evenly","flex-wrap":"wrap","align-items":"center","font-weight":"400","font-size":"12px",height:"auto"}},at={style:{display:"flex","justify-content":"space-evenly","flex-wrap":"wrap","align-items":"center","font-weight":"400","font-size":"12px",height:"auto"}},tt={class:"absolute-full flex flex-center"},lt={style:{"max-width":"400px"}},ot={class:"flex q-mb-sm items-start"},st={class:"text-h6"},rt={class:"flex"},dt={class:"q-pa-md"},nt=o("div",null,"Pickup Locations:",-1),Gt=N({__name:"OrderBookingManager",setup(p){const Q=pe(),a=ce("bus"),h=g(),y=g(),b=g(!1),w=g([]),_=g([]),$=g(),m=g(ea()),u=g(),v=g(),P=g(),j=g(),ee=g(!1),T=g(),Y=g(),ve=le(()=>({"--calendar-resources-width":150+"px"})),fe={keyword:null,start:U().startOf("isoWeek").format("DD/MM/YYYY"),end:U().endOf("isoWeek").format("DD/MM/YYYY"),postcode_region_group_id:null,postcode_region_id:null,scheduled_only:!0,contactor_user_id:null,team_id:null},d=Le(JSON.parse(JSON.stringify(fe))),ge=aa({start:{required:ie},end:{required:ie}},d,{$scope:!1}),G=le(()=>w.value.filter(s=>s.selected)),ae=s=>{P.value=s},he=()=>{d.contractor_user_id&&(d.postcode_region_group_id=null)},ye=()=>{d.team_id&&(d.postcode_region_group_id=null,d.contactor_user_id=null)},z=()=>{Q.loading.show({message:"Fetching bookings..."}),B.post("/order/bookingmanager",d).then(s=>{y.value=s.data.data,_.value=s.data.orders,w.value=s.data.data.map(t=>({id:t.user.id,fullname:t.user.fullname,first_name:t.user.first_name,last_name:t.user.last_name,avatar:t.user.avatar,email:t.user.email,selected:!0,totalCapacity:t.totalCapacity})),b.value=!0,be()}).catch(s=>{Q.loading.hide(),A(s)})},be=()=>{B.post("/user/contractor/landing",{start:d.start,end:d.end,postcode_region_group_id:d.postcode_region_group_id,postcode_region_id:d.postcode_region_id}).then(s=>{j.value=s.data,Q.loading.hide()}).catch(s=>{A(s),Q.loading.hide()})},ke=()=>{u.value&&u.value.moveToToday()},xe=()=>{u.value&&u.value.prev()},Ve=()=>{u.value&&u.value.next()},$e=s=>{const t=U(s.start).format("DD/MM/YYYY"),x=U(s.end).format("DD/MM/YYYY");d.start!==t&&d.end!==x&&(d.start=t,d.end=x,z())},qe=(s,t)=>{ee.value=!0,Y.value=JSON.parse(JSON.stringify(t))},Qe=(s,t)=>{t&&t.resource&&((Y.value.scheduled_pickup_date!==t.timestamp.date||Y.value.contractor_user_id!==t.resource.id)&&a.emit("orderMove",Y.value),ee.value=!1)},Ce=(s,t,x)=>{x&&x.resource&&(Y.value.scheduled_pickup_date=x.timestamp.date,Y.value.contractor_user_id=x.resource.id)},we=s=>{if(!y.value)return[];const t=y.value.find(x=>x.user.id===s.resource.id);return t?t.schedule.filter(x=>x.day===s.timestamp.date):[]},De=s=>_.value?_.value.filter(t=>ua(t.scheduled_pickup_date)===s.timestamp.date&&t.contractor_user_id===s.resource.id):[],Me=s=>{T.value&&T.value===s?T.value=null:T.value=s},Ye=()=>U(d.start,"DD/MM/YYYY").format("MMMM YYYY"),Se=s=>{const t=[];return Object.entries(s).forEach(([x,I])=>{t.push(`${x}: ${I.percentage}%`)}),t.join(", ")};return K(async()=>{h.value=await ha(),v.value=(await ya()).map(s=>({value:s.id,label:s.name})),a.on("getOrders",()=>{z()}),a.on("orderMoved",()=>{z(),Y.value=null})}),Pe(()=>{a.off("getOrders"),a.off("orderMoved")}),(s,t)=>{const x=oe("router-link"),I=oe("q-calendar-scheduler");return i(),f(S,null,[e(Oa),e(Ke,{view:"lHh LpR fFf",container:"",class:"layout-height"},{default:r(()=>[e(je,{class:J({"page-title text-black":!k(Q).dark.isActive,"bg-dark":k(Q).dark.isActive}),bordered:""},{default:r(()=>[o("div",La,[e(Ne,null,{separator:r(()=>[e(M,{size:"1.5em",name:"chevron_right"})]),default:r(()=>[e(se,{label:"Home",icon:"home",to:{name:"appDashboard"}}),e(se,{label:"Booking Manager"})]),_:1}),e(L),e(q,{icon:"place",label:`${P.value||"Location"}`,color:"grey","no-caps":"",flat:"",class:"form-field-padding-dense q-mr-sm"},{default:r(()=>[e(H,null,{default:r(()=>[o("div",Pa,[za,e(la,{modelValue:d.postcode_region_group_id,"onUpdate:modelValue":t[0]||(t[0]=l=>d.postcode_region_group_id=l),label:"Choose an area",outlined:!0,dense:!0,class:"q-mb-md",onSelectedLocation:ae},null,8,["modelValue"]),Ra,e(ta,{modelValue:d.postcode_region_id,"onUpdate:modelValue":t[1]||(t[1]=l=>d.postcode_region_id=l),label:"Specific Suburb",dense:!0,outlined:!0,onSelectedLocation:ae},null,8,["modelValue"])])]),_:1})]),_:1},8,["label"]),e(ba,{modelValue:d.contractor_user_id,"onUpdate:modelValue":[t[2]||(t[2]=l=>d.contractor_user_id=l),he],outlined:!0,dense:!0,label:"Choose a contractor",role:"contractor",class:"q-mr-sm"},null,8,["modelValue"]),e(sa,{modelValue:d.team_id,"onUpdate:modelValue":[t[3]||(t[3]=l=>d.team_id=l),ye],outlined:!0,dense:!0,label:"Choose a customer",class:"q-mr-sm",status:"active"},null,8,["modelValue"]),e(ze,{modelValue:d.scheduled_only,"onUpdate:modelValue":t[4]||(t[4]=l=>d.scheduled_only=l),label:"Scheduled only"},null,8,["modelValue"]),e(q,{onClick:t[5]||(t[5]=l=>z()),disable:k(ge).$invalid||!d.postcode_region_group_id&&!d.postcode_region_id&&!d.contractor_user_id&&!d.team_id,icon:"search",label:"Search",color:"primary",class:"q-ml-sm"},null,8,["disable"])])]),_:1},8,["class"]),e(Xe,null,{default:r(()=>[e(We,{padding:""},{default:r(()=>[b.value?V("",!0):(i(),f("div",Ea,[Fa,e(M,{name:"place"}),D(" Select a location or contractor above to get started ")])),F(o("div",null,[e(X,{class:"bg-seamless q-mt-md"},{default:r(()=>[e(Z,null,{default:r(()=>[o("div",Na,[w.value&&w.value.length?(i(),C(q,{key:0,color:"primary",flat:"",icon:"filter_alt",label:s.$t("contractor.namePlural")},{default:r(()=>[e(H,null,{default:r(()=>[e(Je,{style:{"min-width":"100px"}},{default:r(()=>[(i(!0),f(S,null,O(w.value,l=>(i(),C(Ge,{key:l.id},{default:r(()=>[e(Ie,null,{default:r(()=>[e(me,{modelValue:l.selected,"onUpdate:modelValue":n=>l.selected=n,label:l.fullname},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1},8,["label"])):V("",!0),e(L),o("div",ja,c(Ye()),1),e(L),j.value?(i(),f("div",Ga,[(i(!0),f(S,null,O(j.value,l=>(i(),f("div",{key:l.name,class:"q-mr-lg"},[o("div",Ia,[e(re,{value:l.per,size:"32px",color:"primary","track-color":"grey-5"},null,8,["value"]),o("div",Ja,[o("div",Ha,c(l.name)+" Bookings",1),o("div",null,c(l.oc)+"/"+c(l.cc)+" - "+c(l.per)+"% ",1)])])]))),128))])):V("",!0),e(He,null,{default:r(()=>[e(q,{onClick:t[6]||(t[6]=l=>xe()),icon:"chevron_left",color:"secondary"}),e(q,{onClick:t[7]||(t[7]=l=>ke()),label:"Today",color:"secondary"}),e(q,{onClick:t[8]||(t[8]=l=>Ve()),icon:"chevron_right",color:"secondary"})]),_:1})]),o("div",Wa,[e(I,{ref_key:"calendarRef",ref:u,modelValue:m.value,"onUpdate:modelValue":t[9]||(t[9]=l=>m.value=l),"model-resources":k(G),"onUpdate:modelResources":t[10]||(t[10]=l=>Ee(G)?G.value=l:null),view:"week","short-weekday-label":"",animated:"",bordered:"",weekdays:[1,2,3,4,5,6,0],style:Fe(k(ve)),onChange:$e,"drag-over-func":Ce},{"resource-label":r(({scope:l})=>[o("div",Ka,[e(re,{"show-value":"","font-size":"10px",class:"q-ma-sm",title:Se(l.resource.totalCapacity.categoryCounts),value:l.resource.totalCapacity.percentage,size:"80px",thickness:.25,color:"secondary","track-color":"grey-3"},{default:r(()=>[e(ga,{user:l.resource},null,8,["user"])]),_:2},1032,["title","value","thickness"]),o("div",Xa,[e(x,{to:{name:"contractor-dashboard",params:{id:l.resource.id}},target:"_blank",class:"link"},{default:r(()=>[D(c(l.resource.fullname),1)]),_:2},1032,["to"])])])]),day:r(({scope:l})=>[o("div",{onMouseenter:n=>$.value={resource:l.resource.id,date:l.timestamp.date},style:{height:"100%"}},[o("div",et,[(i(!0),f(S,null,O(De(l),n=>(i(),f("div",{key:n.id},[e(de,{label:`#${n.display_id}: ${n.team.name.slice(0,17)} - ${n.agreed_pickup_time?k(ca)(n.agreed_pickup_time):k(ma)(n.scheduled_pickup_time)}`,class:"cursor-pointer q-pa-sm q-mt-xs",onClick:R=>Me(n.id),color:k(ue)(n.productcategories),draggable:!0,outline:n.status==="draft",onDragstart:R=>qe(R,n),onDragend:R=>Qe(R,l)},null,8,["label","onClick","color","outline","onDragstart","onDragend"]),T.value===n.id?(i(),f("div",{key:0,class:J(`bg-${k(ue)(n.productcategories)} text-white`)},[e(Ta,{model:n},null,8,["model"])],2)):V("",!0)]))),128))]),o("div",at,[(i(!0),f(S,null,O(we(l),n=>(i(),f("div",{key:n.time,class:"q-mt-sm"},[e(q,{"no-caps":"",flat:"",size:"sm",class:"q-mb-xs",dense:""},{default:r(()=>[e(ne,{size:"25px",value:n.capacity.percentage,color:"grey-4","track-color":"grey-2",style:{width:"100px"}},{default:r(()=>[o("div",tt,[e(de,{color:"transparent","text-color":"black",label:`${k(E)(n.start_time)} - ${k(E)(n.end_time)}`},null,8,["label"])])]),_:2},1032,["value"]),e(H,{anchor:"center middle",self:"center middle"},{default:r(()=>[o("div",lt,[o("div",{class:J([{"bg-positive":n.active,"bg-negative":!n.active},"q-pa-sm text-white"])},[o("div",ot,[o("div",null,[D(c(l.resource.fullname)+" ",1),o("div",st,c(k(pa)(n.day))+" - "+c(k(_a)(n.day)),1),o("div",rt,c(k(E)(n.start_time))+" - "+c(k(E)(n.end_time))+" | "+c(n.orders.length)+" booked ",1)]),e(L),F(e(q,{round:"",dense:"",icon:"close",flat:""},null,512),[[W]])])],2),o("div",dt,[nt,e(fa,{postcoderegions:n.postcoderegiongroup.postcoderegions},null,8,["postcoderegions"])])]),e(ne,{size:"10px",value:n.capacity.percentage,color:"secondary"},null,8,["value"])]),_:2},1024)]),_:2},1024)]))),128))])],40,Za)]),_:1},8,["modelValue","model-resources","style"])])]),_:1})]),_:1})],512),[[Re,b.value]])]),_:1})]),_:1})]),_:1})],64)}}});export{Gt as default};
