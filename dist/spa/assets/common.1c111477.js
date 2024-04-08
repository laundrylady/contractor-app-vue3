import { u as useCommonStore } from "./common.0a8f2737.js";
import { g as computed } from "./index.102a095b.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
