import { u as useCommonStore } from "./common.90ca7d11.js";
import { g as computed } from "./index.9898674e.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
