import { u as useCommonStore } from "./common.9d79594f.js";
import { g as computed } from "./index.3b1f6dca.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
