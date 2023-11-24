import { u as useCommonStore } from "./common.e7fdb726.js";
import { g as computed } from "./index.46e0a30b.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
