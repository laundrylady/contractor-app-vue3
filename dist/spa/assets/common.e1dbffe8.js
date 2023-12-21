import { u as useCommonStore } from "./common.75cb2a1d.js";
import { g as computed } from "./index.181f8828.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
