import { u as useCommonStore } from "./common.f14af6e7.js";
import { g as computed } from "./index.bb568279.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
