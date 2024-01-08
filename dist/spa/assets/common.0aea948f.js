import { u as useCommonStore } from "./common.04be35ea.js";
import { g as computed } from "./index.bb082a98.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
