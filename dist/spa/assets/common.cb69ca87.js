import { u as useCommonStore } from "./common.cc3a6704.js";
import { g as computed } from "./index.ee07ae95.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
