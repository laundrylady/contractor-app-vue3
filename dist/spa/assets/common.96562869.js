import { u as useCommonStore } from "./common.cf24672d.js";
import { g as computed } from "./index.a9e72922.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
