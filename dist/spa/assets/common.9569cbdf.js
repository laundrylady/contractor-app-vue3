import { u as useCommonStore } from "./common.57289839.js";
import { g as computed } from "./index.234361c9.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
