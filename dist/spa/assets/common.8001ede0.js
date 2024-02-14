import { u as useCommonStore } from "./common.1795b790.js";
import { g as computed } from "./index.32bccbce.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
