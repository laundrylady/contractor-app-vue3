import { u as useCommonStore } from "./common.84319d85.js";
import { g as computed } from "./index.ed79211e.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
