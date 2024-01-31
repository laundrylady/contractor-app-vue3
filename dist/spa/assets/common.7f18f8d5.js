import { u as useCommonStore } from "./common.63e959b7.js";
import { g as computed } from "./index.ce2171c7.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
