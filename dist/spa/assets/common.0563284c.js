import { u as useCommonStore } from "./common.a412cf63.js";
import { g as computed } from "./index.0e8eff46.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
