import "./axios.fc054a7a.js";
const getLocationPromise = () => {
  return new Promise(function(resolve) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((location) => {
        resolve({ lat: location.coords.latitude, lng: location.coords.longitude });
      }, (error) => {
        console.log(error);
        resolve({ lat: null, lng: null });
      });
    } else {
      resolve({ lat: null, lng: null });
    }
  });
};
const getCurrentLocation = async () => {
  const latLng = await getLocationPromise();
  return latLng;
};
export { getCurrentLocation as a, getLocationPromise as g };
