import { u as useCommonStore } from "./common.131e7305.js";
import { g as computed } from "./index.c9cb2a43.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
