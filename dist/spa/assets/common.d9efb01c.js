import { u as useCommonStore } from "./common.14a59e99.js";
import { g as computed } from "./index.eaa20375.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
