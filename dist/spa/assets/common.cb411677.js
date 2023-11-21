import { u as useCommonStore } from "./common.ec940c11.js";
import { g as computed } from "./index.6498e03d.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
