import { a as api } from "./axios.19035272.js";
const productCategoriesVisibleBooking = async () => {
  const categories = sessionStorage.getItem("productCategoriesVisibleBooking");
  if (categories) {
    return JSON.parse(categories);
  }
  return api.get("/public/productcategory/index?visible_booking=true").then((response) => {
    sessionStorage.setItem("productCategoriesVisibleBooking", JSON.stringify(response.data.map((o) => {
      return { value: o.id, label: o.name, icon: o.icon };
    })));
    return response.data.map((o) => {
      return { value: o.id, label: o.name, icon: o.icon };
    });
  });
};
const productCategoriesVisibleCapacity = async () => {
  const categories = sessionStorage.getItem("productCategoriesVisibleCapacity");
  if (categories) {
    return JSON.parse(categories);
  }
  return api.get("/public/productcategory/index?visible_capacity=true").then((response) => {
    sessionStorage.setItem("productCategoriesVisibleCapacity", JSON.stringify(response.data.map((o) => {
      return { value: o.id, label: o.name, icon: o.icon };
    })));
    return response.data.map((o) => {
      return { value: o.id, label: o.name, icon: o.icon };
    });
  });
};
export { productCategoriesVisibleCapacity as a, productCategoriesVisibleBooking as p };
