import { u as useCommonStore } from "./common.ce1ea944.js";
import { g as computed } from "./index.3f86858d.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
