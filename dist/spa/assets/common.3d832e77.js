import { u as useCommonStore } from "./common.e5452c0c.js";
import { g as computed } from "./index.9d7abd75.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
