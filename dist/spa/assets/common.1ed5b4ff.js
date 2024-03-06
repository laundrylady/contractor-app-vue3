import { u as useCommonStore } from "./common.b0e0e0d9.js";
import { g as computed } from "./index.17833339.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
