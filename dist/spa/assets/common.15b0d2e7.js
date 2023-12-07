import { u as useCommonStore } from "./common.4dcfaa90.js";
import { g as computed } from "./index.e4348715.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
