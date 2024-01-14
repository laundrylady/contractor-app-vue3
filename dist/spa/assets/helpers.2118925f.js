import { a as api } from "./axios.8eb63b42.js";
const productCategoriesVisibleBooking = async () => {
  return api.get("/public/productcategory/index?visible_booking=true").then((response) => {
    return response.data.map((o) => {
      return { value: o.id, label: o.name, icon: o.icon };
    });
  });
};
const productCategoriesVisibleCapacity = async () => {
  return api.get("/public/productcategory/index?visible_capacity=true").then((response) => {
    return response.data.map((o) => {
      return { value: o.id, label: o.name, icon: o.icon };
    });
  });
};
export { productCategoriesVisibleCapacity as a, productCategoriesVisibleBooking as p };
