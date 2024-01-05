import { u as useCommonStore } from "./common.da3a1074.js";
import { g as computed } from "./index.ee12a592.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
