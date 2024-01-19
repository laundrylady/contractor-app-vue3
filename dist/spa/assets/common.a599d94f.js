import { u as useCommonStore } from "./common.6dac2cf0.js";
import { g as computed } from "./index.2a8b6235.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
