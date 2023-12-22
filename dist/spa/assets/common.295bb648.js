import { u as useCommonStore } from "./common.ad56f227.js";
import { g as computed } from "./index.010c9441.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
