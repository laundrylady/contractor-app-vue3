import { u as useCommonStore } from "./common.6dfa47ee.js";
import { g as computed } from "./index.bb02fd1d.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
