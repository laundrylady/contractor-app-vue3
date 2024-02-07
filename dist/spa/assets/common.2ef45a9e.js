import { u as useCommonStore } from "./common.4decb158.js";
import { g as computed } from "./index.1eb7e0d4.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
