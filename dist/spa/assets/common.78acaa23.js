import { u as useCommonStore } from "./common.4d754448.js";
import { g as computed } from "./index.b933ddc7.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
