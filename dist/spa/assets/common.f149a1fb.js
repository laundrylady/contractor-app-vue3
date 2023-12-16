import { u as useCommonStore } from "./common.6fc3fe87.js";
import { g as computed } from "./index.208ac1b0.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
