import { u as useCommonStore } from "./common.4adc39ca.js";
import { g as computed } from "./index.646fce27.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
