import { u as useCommonStore } from "./common.1e1cd659.js";
import { g as computed } from "./index.96a3f834.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
