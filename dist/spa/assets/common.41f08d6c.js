import { u as useCommonStore } from "./common.6b58c023.js";
import { g as computed } from "./index.8edaef54.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
