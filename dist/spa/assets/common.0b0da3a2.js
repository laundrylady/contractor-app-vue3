import { u as useCommonStore } from "./common.3a9e249c.js";
import { g as computed } from "./index.15617fb1.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
