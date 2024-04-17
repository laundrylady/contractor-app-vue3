import { u as useCommonStore } from "./common.07597127.js";
import { g as computed } from "./index.e85fd7a7.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
