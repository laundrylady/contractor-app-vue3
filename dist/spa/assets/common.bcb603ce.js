import { u as useCommonStore } from "./common.92ffcaa5.js";
import { g as computed } from "./index.961c39a4.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
