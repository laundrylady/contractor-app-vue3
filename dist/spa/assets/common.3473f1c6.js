import { u as useCommonStore } from "./common.c7e91a43.js";
import { g as computed } from "./index.f2f120a5.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
