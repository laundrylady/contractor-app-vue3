import { u as useCommonStore } from "./common.e119b521.js";
import { g as computed } from "./index.e951243a.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
