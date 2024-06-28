import { u as useCommonStore } from "./common.c20e12fe.js";
import { g as computed } from "./index.9b8e3a41.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
