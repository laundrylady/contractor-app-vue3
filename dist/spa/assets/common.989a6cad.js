import { u as useCommonStore } from "./common.91989823.js";
import { g as computed } from "./index.603eb027.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
