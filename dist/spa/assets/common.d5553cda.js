import { u as useCommonStore } from "./common.6e4cab41.js";
import { g as computed } from "./index.5c682f3f.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
