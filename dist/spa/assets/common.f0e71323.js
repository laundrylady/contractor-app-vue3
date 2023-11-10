import { u as useCommonStore } from "./common.a950ff5f.js";
import { g as computed } from "./index.463e86f0.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
