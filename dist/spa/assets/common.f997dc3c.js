import { u as useCommonStore } from "./common.fe2235f3.js";
import { g as computed } from "./index.22c247c5.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
