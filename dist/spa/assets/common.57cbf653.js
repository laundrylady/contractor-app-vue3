import { u as useCommonStore } from "./common.c0af7955.js";
import { g as computed } from "./index.f3826b35.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
