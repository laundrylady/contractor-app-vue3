import { u as useCommonStore } from "./common.6bb88946.js";
import { g as computed } from "./index.08ad31cf.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
