import { u as useCommonStore } from "./common.90b031a7.js";
import { g as computed } from "./index.42122499.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
