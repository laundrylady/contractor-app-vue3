import { u as useCommonStore } from "./common.7a81c684.js";
import { g as computed } from "./index.f5d83c29.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
