import { u as useCommonStore } from "./common.51767409.js";
import { g as computed } from "./index.11e648ff.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
