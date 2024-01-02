import { u as useCommonStore } from "./common.b7537706.js";
import { g as computed } from "./index.2bb9246b.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
