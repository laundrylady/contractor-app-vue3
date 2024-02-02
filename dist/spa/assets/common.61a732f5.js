import { u as useCommonStore } from "./common.5b306536.js";
import { g as computed } from "./index.84f10f3f.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
