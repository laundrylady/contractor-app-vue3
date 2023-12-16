import { u as useCommonStore } from "./common.00d3bfee.js";
import { g as computed } from "./index.7f74603c.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
