import { u as useCommonStore } from "./common.f34b6e87.js";
import { g as computed } from "./index.08099017.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
