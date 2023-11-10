import { d as defineStore } from "./index.463e86f0.js";
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
