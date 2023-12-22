import { u as useCommonStore } from "./common.3b17f14f.js";
import { g as computed } from "./index.b2f4aca3.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
