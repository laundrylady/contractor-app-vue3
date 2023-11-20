import { u as useCommonStore } from "./common.ae437933.js";
import { g as computed } from "./index.e689b3a4.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
