import { u as useCommonStore } from "./common.af7d3929.js";
import { g as computed } from "./index.4d63580c.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
