import { a as api } from "./axios.c622a4bf.js";
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
export { productCategoriesVisibleCapacity as p };
