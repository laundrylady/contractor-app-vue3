import { u as useCommonStore } from "./common.dde2d048.js";
import { g as computed } from "./index.1962d2ae.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
