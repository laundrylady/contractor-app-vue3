import { u as useCommonStore } from "./common.8bfbf4e7.js";
import { g as computed } from "./index.ae9373f8.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
