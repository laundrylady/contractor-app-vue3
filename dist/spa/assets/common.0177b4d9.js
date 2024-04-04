import { u as useCommonStore } from "./common.3bc1f4f7.js";
import { g as computed } from "./index.cd25fff4.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
