import { u as useCommonStore } from "./common.bc98f1da.js";
import { g as computed } from "./index.4926aa9a.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
