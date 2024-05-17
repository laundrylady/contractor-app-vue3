import { u as useCommonStore } from "./common.35dbfaff.js";
import { g as computed } from "./index.7a6165bd.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
