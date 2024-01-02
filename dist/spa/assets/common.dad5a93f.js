import { u as useCommonStore } from "./common.1a655454.js";
import { g as computed } from "./index.278ed024.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
