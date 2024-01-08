import { u as useCommonStore } from "./common.85846c44.js";
import { g as computed } from "./index.afc091ab.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
