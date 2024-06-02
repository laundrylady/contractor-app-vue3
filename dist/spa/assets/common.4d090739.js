import { u as useCommonStore } from "./common.09fce8c9.js";
import { g as computed } from "./index.236933ce.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
