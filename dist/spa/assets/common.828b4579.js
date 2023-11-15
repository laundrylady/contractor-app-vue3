import { u as useCommonStore } from "./common.104952d0.js";
import { g as computed } from "./index.925d5c0f.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
