import { u as useCommonStore } from "./common.2b8a81bb.js";
import { g as computed } from "./index.cfc8c6ea.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
