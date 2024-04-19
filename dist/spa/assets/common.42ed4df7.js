import { u as useCommonStore } from "./common.2b975577.js";
import { g as computed } from "./index.538c925c.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
