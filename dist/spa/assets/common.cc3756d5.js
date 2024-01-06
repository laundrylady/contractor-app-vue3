import { u as useCommonStore } from "./common.f226b23f.js";
import { g as computed } from "./index.4a7ccaf8.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
