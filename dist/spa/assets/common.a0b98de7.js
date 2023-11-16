import { u as useCommonStore } from "./common.057c96b7.js";
import { g as computed } from "./index.d6d4bbef.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
