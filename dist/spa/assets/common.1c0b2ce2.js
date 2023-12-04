import { u as useCommonStore } from "./common.b81c5ad7.js";
import { g as computed } from "./index.e4f8656c.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
