import { u as useCommonStore } from "./common.3caff703.js";
import { g as computed } from "./index.c08a4e10.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
