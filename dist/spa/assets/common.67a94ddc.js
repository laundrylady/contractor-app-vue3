import { u as useCommonStore } from "./common.cd21093a.js";
import { g as computed } from "./index.63b592af.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
