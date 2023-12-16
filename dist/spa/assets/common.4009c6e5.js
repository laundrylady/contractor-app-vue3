import { u as useCommonStore } from "./common.d81b3e51.js";
import { g as computed } from "./index.c5118e29.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
