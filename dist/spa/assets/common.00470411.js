import { u as useCommonStore } from "./common.a5a7a6f8.js";
import { g as computed } from "./index.97eff735.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
