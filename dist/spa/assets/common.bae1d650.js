import { u as useCommonStore } from "./common.7b1b36cb.js";
import { g as computed } from "./index.79cccf83.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
