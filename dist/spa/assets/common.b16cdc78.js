import { u as useCommonStore } from "./common.56a31301.js";
import { g as computed } from "./index.91814ea0.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
