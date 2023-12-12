import { u as useCommonStore } from "./common.743d0454.js";
import { g as computed } from "./index.862d01a7.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
