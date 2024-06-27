import { u as useCommonStore } from "./common.59184c6f.js";
import { g as computed } from "./index.61f718f4.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
