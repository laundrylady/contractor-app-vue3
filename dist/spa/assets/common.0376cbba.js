import { u as useCommonStore } from "./common.146f0faf.js";
import { g as computed } from "./index.a490d332.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
