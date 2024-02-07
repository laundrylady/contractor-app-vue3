import { u as useCommonStore } from "./common.5ad56ab2.js";
import { g as computed } from "./index.e779ed8f.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
