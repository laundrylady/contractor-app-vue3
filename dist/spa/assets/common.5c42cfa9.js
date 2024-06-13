import { u as useCommonStore } from "./common.49627626.js";
import { g as computed } from "./index.a50f0974.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
