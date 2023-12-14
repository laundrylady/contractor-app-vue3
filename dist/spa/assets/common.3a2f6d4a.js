import { u as useCommonStore } from "./common.e78051e0.js";
import { g as computed } from "./index.420ace9d.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
