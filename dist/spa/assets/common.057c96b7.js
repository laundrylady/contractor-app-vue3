import { d as defineStore } from "./index.d6d4bbef.js";
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
