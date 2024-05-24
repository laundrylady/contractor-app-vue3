import { u as useCommonStore } from "./common.08f0857e.js";
import { g as computed } from "./index.0b09a5a3.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
