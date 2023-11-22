import { u as useCommonStore } from "./common.01d04d55.js";
import { g as computed } from "./index.54585565.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
