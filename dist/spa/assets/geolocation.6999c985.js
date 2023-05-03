import { a as api } from "./axios.fb60ded3.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
const getLocationPromise = () => {
  return new Promise(function(resolve) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((location) => {
        resolve({ lat: location.coords.latitude, lng: location.coords.longitude });
      });
    } else {
      resolve({ lat: -26.606107, lng: 152.9340755 });
    }
  });
};
const getCurrentLocation = async () => {
  const latLng = await getLocationPromise();
  return latLng;
};
const getPostcodeRegionGroups = async () => {
  const groups = sessionStorage.getItem("postcodeRegionGroups");
  if (groups) {
    return JSON.parse(groups);
  }
  return api.get("/postcoderegiongroup/index").then((response) => {
    sessionStorage.setItem("postcodeRegionGroups", JSON.stringify(response.data));
    return response.data;
  }).catch((error) => {
    useMixinDebug(error);
  });
};
export { getCurrentLocation as a, getPostcodeRegionGroups as g };
