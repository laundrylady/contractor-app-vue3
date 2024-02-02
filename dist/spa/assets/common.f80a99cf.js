import { u as useCommonStore } from "./common.0890addc.js";
import { g as computed } from "./index.20697ea6.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
