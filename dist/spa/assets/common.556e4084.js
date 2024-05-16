import { u as useCommonStore } from "./common.55b44c37.js";
import { g as computed } from "./index.796300b2.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
