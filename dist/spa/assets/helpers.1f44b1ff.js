import { a as api } from "./axios.a37557cf.js";
const productCategoriesVisibleBooking = async () => {
  const categories = sessionStorage.getItem("productCategoriesVisibleBooking");
  if (categories) {
    return JSON.parse(categories);
  }
  return api.get("/productcategory/index?visible_booking=true").then((response) => {
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
  return api.get("/productcategory/index?visible_capacity=true").then((response) => {
    sessionStorage.setItem("productCategoriesVisibleCapacity", JSON.stringify(response.data.map((o) => {
      return { value: o.id, label: o.name, icon: o.icon };
    })));
    return response.data.map((o) => {
      return { value: o.id, label: o.name, icon: o.icon };
    });
  });
};
const orderColor = (productCategories) => {
  const colorMap = [
    { ids: [1, 2], color: "primary" },
    { ids: [1], color: "info" },
    { ids: [2], color: "warning" }
  ];
  const activeCategories = productCategories.filter((o) => o.meta && o.meta.pivot_active).map((o) => o.id);
  const found = colorMap.find((o) => {
    let valid = true;
    for (const i of o.ids) {
      if (activeCategories.indexOf(i) === -1) {
        valid = false;
      }
    }
    return valid;
  });
  if (found) {
    return found.color;
  }
  return "grey";
};
export { productCategoriesVisibleCapacity as a, orderColor as o, productCategoriesVisibleBooking as p };
