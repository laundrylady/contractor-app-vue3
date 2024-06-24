import { d as defineStore } from "./index.33efd2c0.js";
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
