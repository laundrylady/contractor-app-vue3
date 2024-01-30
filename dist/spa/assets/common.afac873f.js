import { u as useCommonStore } from "./common.289e5cb7.js";
import { g as computed } from "./index.c627736b.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
