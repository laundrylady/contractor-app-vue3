import { u as useCommonStore } from "./common.9027085d.js";
import { g as computed } from "./index.d881d216.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
