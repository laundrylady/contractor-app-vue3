import { u as useCommonStore } from "./common.c3ffdfc6.js";
import { g as computed } from "./index.da11e37d.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
