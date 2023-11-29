import { u as useCommonStore } from "./common.e8becf7f.js";
import { g as computed } from "./index.769a5324.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
