import { u as useCommonStore } from "./common.d1cc1834.js";
import { g as computed } from "./index.33efd2c0.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
