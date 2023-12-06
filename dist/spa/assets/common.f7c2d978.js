import { u as useCommonStore } from "./common.818e15cd.js";
import { g as computed } from "./index.9d591b1c.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
