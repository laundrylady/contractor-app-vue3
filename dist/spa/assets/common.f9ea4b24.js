import { u as useCommonStore } from "./common.95bf03ee.js";
import { g as computed } from "./index.8df0f4ad.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
