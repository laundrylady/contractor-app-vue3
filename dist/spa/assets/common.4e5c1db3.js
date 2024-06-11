import { u as useCommonStore } from "./common.fdd5c8e5.js";
import { g as computed } from "./index.e9465d3e.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
