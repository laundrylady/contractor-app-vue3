import { u as useCommonStore } from "./common.61e10e88.js";
import { g as computed } from "./index.64115597.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
