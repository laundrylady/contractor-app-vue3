import { u as useCommonStore } from "./common.3928969b.js";
import { g as computed } from "./index.37c212b7.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
