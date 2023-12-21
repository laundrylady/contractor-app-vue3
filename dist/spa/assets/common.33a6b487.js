import { u as useCommonStore } from "./common.2c5b70c5.js";
import { g as computed } from "./index.a8c2088f.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
