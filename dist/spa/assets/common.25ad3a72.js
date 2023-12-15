import { u as useCommonStore } from "./common.95fd4b1e.js";
import { g as computed } from "./index.97c2c6d1.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
