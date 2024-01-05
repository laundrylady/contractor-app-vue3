import { u as useCommonStore } from "./common.555cda23.js";
import { g as computed } from "./index.c225e500.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
