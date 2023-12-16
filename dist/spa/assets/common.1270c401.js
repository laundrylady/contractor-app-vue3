import { u as useCommonStore } from "./common.8756b9bd.js";
import { g as computed } from "./index.da51b833.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
