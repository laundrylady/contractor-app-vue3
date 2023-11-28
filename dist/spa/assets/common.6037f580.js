import { u as useCommonStore } from "./common.af260936.js";
import { g as computed } from "./index.2c4e0f9e.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
