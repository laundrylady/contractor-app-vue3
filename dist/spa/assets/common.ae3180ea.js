import { u as useCommonStore } from "./common.c8c78f7d.js";
import { g as computed } from "./index.30054b44.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
