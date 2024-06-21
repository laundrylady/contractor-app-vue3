import { u as useCommonStore } from "./common.dcf69d47.js";
import { g as computed } from "./index.f4154b53.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
