import { u as useCommonStore } from "./common.98018627.js";
import { g as computed } from "./index.d3d6e530.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
