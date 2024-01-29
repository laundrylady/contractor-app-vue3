import { u as useCommonStore } from "./common.934c3c20.js";
import { g as computed } from "./index.42bdc4c5.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
