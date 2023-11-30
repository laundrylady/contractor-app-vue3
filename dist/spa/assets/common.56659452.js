import { u as useCommonStore } from "./common.b637b72b.js";
import { g as computed } from "./index.2ce3582b.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
