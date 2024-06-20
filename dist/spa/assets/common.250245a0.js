import { u as useCommonStore } from "./common.98db0637.js";
import { g as computed } from "./index.1b959b05.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
