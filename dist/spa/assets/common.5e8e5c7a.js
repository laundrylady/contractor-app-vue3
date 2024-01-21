import { u as useCommonStore } from "./common.1f73a443.js";
import { g as computed } from "./index.3e5b9003.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
