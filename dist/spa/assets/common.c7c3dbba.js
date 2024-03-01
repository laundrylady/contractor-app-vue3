import { u as useCommonStore } from "./common.b4df6748.js";
import { g as computed } from "./index.31045b05.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
