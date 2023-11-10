import { u as useCommonStore } from "./common.76fd11cb.js";
import { g as computed } from "./index.e2534425.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
