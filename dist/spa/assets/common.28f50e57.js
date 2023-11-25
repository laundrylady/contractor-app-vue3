import { u as useCommonStore } from "./common.17528540.js";
import { g as computed } from "./index.350647ef.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
