import { u as useCommonStore } from "./common.987cf969.js";
import { g as computed } from "./index.686b673d.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
