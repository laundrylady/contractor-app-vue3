import { u as useCommonStore } from "./common.4a3f3b09.js";
import { g as computed } from "./index.1e4623ca.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
