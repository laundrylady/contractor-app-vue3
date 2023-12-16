import { u as useCommonStore } from "./common.b0841500.js";
import { g as computed } from "./index.bb716ce2.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
