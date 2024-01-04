import { u as useCommonStore } from "./common.f3fac384.js";
import { g as computed } from "./index.cbfc43e6.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
