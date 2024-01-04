import { u as useCommonStore } from "./common.828ff682.js";
import { g as computed } from "./index.f1ef5c18.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
