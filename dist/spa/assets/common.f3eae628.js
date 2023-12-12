import { u as useCommonStore } from "./common.c99a5ba6.js";
import { g as computed } from "./index.f6cde04a.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
