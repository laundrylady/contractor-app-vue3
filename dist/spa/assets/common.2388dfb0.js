import { u as useCommonStore } from "./common.ecd9cfdd.js";
import { g as computed } from "./index.4ea3bfb0.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
