import { u as useCommonStore } from "./common.5bc71521.js";
import { g as computed } from "./index.7fc66124.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
