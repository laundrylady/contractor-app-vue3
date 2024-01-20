import { u as useCommonStore } from "./common.d988d1f6.js";
import { g as computed } from "./index.bc725a9e.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
