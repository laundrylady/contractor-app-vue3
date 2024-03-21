import { u as useCommonStore } from "./common.318054ee.js";
import { g as computed } from "./index.f3419799.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
