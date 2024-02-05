import { u as useCommonStore } from "./common.fcb9d8ce.js";
import { g as computed } from "./index.ec82fb92.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
