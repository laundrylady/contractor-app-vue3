import { u as useCommonStore } from "./common.a7caf51f.js";
import { g as computed } from "./index.224e20e0.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
