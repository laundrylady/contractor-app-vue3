import { u as useCommonStore } from "./common.79078c0f.js";
import { g as computed } from "./index.6ce20806.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
