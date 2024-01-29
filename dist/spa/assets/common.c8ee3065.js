import { u as useCommonStore } from "./common.172292b2.js";
import { g as computed } from "./index.e7178dde.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
