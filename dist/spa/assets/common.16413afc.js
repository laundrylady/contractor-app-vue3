import { u as useCommonStore } from "./common.485f241d.js";
import { g as computed } from "./index.a20363ca.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
