import { u as useCommonStore } from "./common.1a763f9b.js";
import { g as computed } from "./index.3c1ce126.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
