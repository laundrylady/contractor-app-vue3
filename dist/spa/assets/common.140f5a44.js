import { u as useCommonStore } from "./common.5178bdce.js";
import { g as computed } from "./index.c351ea70.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
