import { u as useCommonStore } from "./common.54530ba8.js";
import { g as computed } from "./index.88cb70e0.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
