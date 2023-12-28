import { u as useCommonStore } from "./common.cfc4942d.js";
import { g as computed } from "./index.f9822a69.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
