import { u as useCommonStore } from "./common.f19c94ca.js";
import { g as computed } from "./index.065526b9.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
