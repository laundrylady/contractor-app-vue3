import { u as useCommonStore } from "./common.03e8c5f0.js";
import { g as computed } from "./index.79597c2e.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
