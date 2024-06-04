import { u as useCommonStore } from "./common.127bba04.js";
import { g as computed } from "./index.59e718a9.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
