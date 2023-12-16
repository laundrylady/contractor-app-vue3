import { u as useCommonStore } from "./common.441c1ece.js";
import { g as computed } from "./index.6a5c0810.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
