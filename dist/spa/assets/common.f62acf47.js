import { u as useCommonStore } from "./common.ce86c34f.js";
import { g as computed } from "./index.944bfff3.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
