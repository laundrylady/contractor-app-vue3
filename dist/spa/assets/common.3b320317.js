import { d as defineStore } from "./index.f35da196.js";
const useCommonStore = defineStore("common", {
  state: () => {
    return {
      data: null
    };
  },
  actions: {
    setCommonData(data) {
      this.data = data;
    }
  }
});
export { useCommonStore as u };