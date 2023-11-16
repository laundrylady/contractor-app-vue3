import { u as useCommonStore } from "./common.9512b987.js";
import { g as computed } from "./index.ae929d54.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
