import { u as useCommonStore } from "./common.0c84d8a5.js";
import { g as computed } from "./index.e10d985a.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
