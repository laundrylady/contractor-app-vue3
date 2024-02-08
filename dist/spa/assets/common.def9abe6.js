import { u as useCommonStore } from "./common.e6e9bf7c.js";
import { g as computed } from "./index.2661e1e7.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
