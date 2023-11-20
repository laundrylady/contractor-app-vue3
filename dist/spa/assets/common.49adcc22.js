import { u as useCommonStore } from "./common.6197ed53.js";
import { g as computed } from "./index.d121ec5d.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
