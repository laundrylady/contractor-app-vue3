import { u as useCommonStore } from "./common.d8d6c410.js";
import { g as computed } from "./index.9eb88662.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
