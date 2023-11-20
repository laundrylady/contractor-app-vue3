import { u as useCommonStore } from "./common.2756f26e.js";
import { g as computed } from "./index.277d24a1.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
