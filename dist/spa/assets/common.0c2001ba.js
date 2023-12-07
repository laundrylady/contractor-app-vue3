import { u as useCommonStore } from "./common.898bb98e.js";
import { g as computed } from "./index.397bbb4f.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
