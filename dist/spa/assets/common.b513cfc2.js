import { u as useCommonStore } from "./common.a40a8c28.js";
import { g as computed } from "./index.bd785861.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
