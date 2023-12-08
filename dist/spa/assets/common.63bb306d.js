import { u as useCommonStore } from "./common.b4dbc24a.js";
import { g as computed } from "./index.2b7cc3d6.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
