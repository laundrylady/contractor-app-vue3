import { u as useCommonStore } from "./common.71f4ea4d.js";
import { g as computed } from "./index.8e5fd2f9.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
