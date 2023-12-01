import { u as useCommonStore } from "./common.716558c2.js";
import { g as computed } from "./index.66cb46b4.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
