import { u as useCommonStore } from "./common.da684e8f.js";
import { g as computed } from "./index.131c16d8.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
