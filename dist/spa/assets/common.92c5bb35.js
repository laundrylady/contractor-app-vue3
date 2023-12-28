import { u as useCommonStore } from "./common.525ac776.js";
import { g as computed } from "./index.fcad64dd.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
