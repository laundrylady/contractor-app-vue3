import { u as useCommonStore } from "./common.c72f9b10.js";
import { g as computed } from "./index.f668ef97.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
