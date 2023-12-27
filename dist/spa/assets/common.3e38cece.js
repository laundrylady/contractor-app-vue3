import { u as useCommonStore } from "./common.1cef49f5.js";
import { g as computed } from "./index.ceae6044.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
