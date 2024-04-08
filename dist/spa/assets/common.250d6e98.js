import { u as useCommonStore } from "./common.9d0c9e84.js";
import { g as computed } from "./index.d3156251.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
