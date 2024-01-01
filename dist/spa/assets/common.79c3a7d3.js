import { u as useCommonStore } from "./common.1b3a471b.js";
import { g as computed } from "./index.7dc3575e.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
