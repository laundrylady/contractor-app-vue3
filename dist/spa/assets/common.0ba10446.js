import { u as useCommonStore } from "./common.a297927a.js";
import { g as computed } from "./index.d0f04a73.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
