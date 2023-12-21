import { u as useCommonStore } from "./common.3b320317.js";
import { g as computed } from "./index.f35da196.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
