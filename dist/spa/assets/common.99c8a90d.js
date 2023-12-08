import { u as useCommonStore } from "./common.37d9453b.js";
import { g as computed } from "./index.a9a574a4.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
