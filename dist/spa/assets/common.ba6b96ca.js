import { u as useCommonStore } from "./common.e0ca0a46.js";
import { g as computed } from "./index.706d8900.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
