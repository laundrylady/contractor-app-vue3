import { u as useCommonStore } from "./common.89a9f610.js";
import { g as computed } from "./index.e66b6337.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
