import { u as useCommonStore } from "./common.b8023194.js";
import { g as computed } from "./index.cdcdcf43.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
