import { u as useCommonStore } from "./common.b8b5f101.js";
import { g as computed } from "./index.ed5d663e.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
