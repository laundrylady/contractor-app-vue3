import { u as useCommonStore } from "./common.17be17ff.js";
import { g as computed } from "./index.f4bfaae2.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
