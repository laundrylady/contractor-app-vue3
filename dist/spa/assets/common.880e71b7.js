import { u as useCommonStore } from "./common.464330a6.js";
import { g as computed } from "./index.6acd2f95.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
