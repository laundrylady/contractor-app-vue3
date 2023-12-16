import { u as useCommonStore } from "./common.ad34ef83.js";
import { g as computed } from "./index.6a0e49ef.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
