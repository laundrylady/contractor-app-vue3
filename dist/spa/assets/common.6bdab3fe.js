import { u as useCommonStore } from "./common.ccf96dc6.js";
import { g as computed } from "./index.a39d6510.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
