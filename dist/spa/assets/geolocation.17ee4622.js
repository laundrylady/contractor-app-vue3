import{a as e}from"./axios.07c7c7d9.js";import{u as n}from"./debug.9f3fb657.js";const r=()=>new Promise(function(o){navigator.geolocation?navigator.geolocation.getCurrentPosition(t=>{o({lat:t.coords.latitude,lng:t.coords.longitude})}):o({lat:-26.606107,lng:152.9340755})}),i=async()=>await r(),g=async()=>{const o=sessionStorage.getItem("postcodeRegionGroups");return o?JSON.parse(o):e.get("/postcoderegiongroup/index").then(t=>(sessionStorage.setItem("postcodeRegionGroups",JSON.stringify(t.data)),t.data)).catch(t=>{n(t)})};export{i as a,g};
