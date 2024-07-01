import { u as useCommonStore } from "./common.b185f031.js";
import { g as computed } from "./index.f0bcd142.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
