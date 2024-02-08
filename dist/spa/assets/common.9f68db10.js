import { u as useCommonStore } from "./common.00aec27d.js";
import { g as computed } from "./index.e3419985.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
