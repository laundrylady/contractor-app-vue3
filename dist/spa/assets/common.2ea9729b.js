import { u as useCommonStore } from "./common.4b9ed3c7.js";
import { g as computed } from "./index.439f6236.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
