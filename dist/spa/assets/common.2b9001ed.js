import { u as useCommonStore } from "./common.dffb3ef9.js";
import { g as computed } from "./index.93cf3cda.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
