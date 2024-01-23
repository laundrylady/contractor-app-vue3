import { u as useCommonStore } from "./common.b0d3ec20.js";
import { g as computed } from "./index.ede44c03.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
