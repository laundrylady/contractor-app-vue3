import { u as useCommonStore } from "./common.8dd2d22d.js";
import { g as computed } from "./index.84fae5f5.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
