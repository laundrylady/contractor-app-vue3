import { u as useCommonStore } from "./common.4712f8a5.js";
import { g as computed } from "./index.720b4a5c.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
