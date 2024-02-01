import { u as useCommonStore } from "./common.b6946fea.js";
import { g as computed } from "./index.4d9fc4f8.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
