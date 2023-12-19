import { u as useCommonStore } from "./common.44146ab5.js";
import { g as computed } from "./index.92f7e7d0.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
