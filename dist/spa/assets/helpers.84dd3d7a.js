import{a as n}from"./axios.07c7c7d9.js";const l=async()=>{const t=sessionStorage.getItem("productCategoriesVisibleBooking");return t?JSON.parse(t):n.get("/productcategory/index?visible_booking=true").then(i=>(sessionStorage.setItem("productCategoriesVisibleBooking",JSON.stringify(i.data.map(e=>({value:e.id,label:e.name,icon:e.icon})))),i.data.map(e=>({value:e.id,label:e.name,icon:e.icon}))))},u=async()=>{const t=sessionStorage.getItem("productCategoriesVisibleCapacity");return t?JSON.parse(t):n.get("/productcategory/index?visible_capacity=true").then(i=>(sessionStorage.setItem("productCategoriesVisibleCapacity",JSON.stringify(i.data.map(e=>({value:e.id,label:e.name,icon:e.icon})))),i.data.map(e=>({value:e.id,label:e.name,icon:e.icon}))))},d=t=>{const i=[{ids:[1,2],color:"primary"},{ids:[1],color:"info"},{ids:[2],color:"warning"}],e=t.filter(r=>r.meta&&r.meta.pivot_active).map(r=>r.id),a=i.find(r=>{let o=!0;for(const s of r.ids)e.indexOf(s)===-1&&(o=!1);return o});return a?a.color:"grey"};export{u as a,d as o,l as p};
