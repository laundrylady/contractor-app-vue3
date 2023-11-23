import { u as useCommonStore } from "./common.c5b7e7b1.js";
import { g as computed } from "./index.287c82d5.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
