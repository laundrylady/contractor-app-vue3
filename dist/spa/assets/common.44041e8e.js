import { u as useCommonStore } from "./common.f76a5f2e.js";
import { g as computed } from "./index.cbceafe4.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
