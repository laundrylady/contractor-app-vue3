import { u as useCommonStore } from "./common.fc061241.js";
import { g as computed } from "./index.e01fb56c.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
