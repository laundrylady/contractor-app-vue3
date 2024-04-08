import { u as useCommonStore } from "./common.98773722.js";
import { g as computed } from "./index.f4eab609.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
