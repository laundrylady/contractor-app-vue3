import { u as useCommonStore } from "./common.f4b0dd2d.js";
import { g as computed } from "./index.26ecc84c.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
