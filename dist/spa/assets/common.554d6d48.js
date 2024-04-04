import { u as useCommonStore } from "./common.a22b19ec.js";
import { g as computed } from "./index.02752fdf.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
