import { u as useCommonStore } from "./common.10ec0417.js";
import { g as computed } from "./index.bffa8c3c.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
