import { u as useCommonStore } from "./common.65c076a3.js";
import { g as computed } from "./index.63251f47.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
