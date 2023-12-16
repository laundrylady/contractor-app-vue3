import { u as useCommonStore } from "./common.3fe30c12.js";
import { g as computed } from "./index.3493713e.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
