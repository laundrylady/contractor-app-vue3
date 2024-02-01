import { u as useCommonStore } from "./common.fa711944.js";
import { g as computed } from "./index.a4ada3b6.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
