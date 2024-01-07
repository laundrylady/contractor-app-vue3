import { u as useCommonStore } from "./common.c411a924.js";
import { g as computed } from "./index.f1303de0.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
