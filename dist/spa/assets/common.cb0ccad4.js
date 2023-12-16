import { u as useCommonStore } from "./common.55481ef3.js";
import { g as computed } from "./index.394bfd7c.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
