import { u as useCommonStore } from "./common.04aed53d.js";
import { g as computed } from "./index.290e3c5e.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
