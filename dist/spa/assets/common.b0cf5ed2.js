import { u as useCommonStore } from "./common.3b949c05.js";
import { g as computed } from "./index.9a11cf11.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
