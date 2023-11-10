import { u as useCommonStore } from "./common.03a82637.js";
import { g as computed } from "./index.0095e572.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
