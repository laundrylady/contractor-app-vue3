import { u as useCommonStore } from "./common.f8619130.js";
import { g as computed } from "./index.109aab81.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
