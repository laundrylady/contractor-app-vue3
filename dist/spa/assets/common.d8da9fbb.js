import { u as useCommonStore } from "./common.21fa4010.js";
import { g as computed } from "./index.3ebb8669.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
