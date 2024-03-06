import { u as useCommonStore } from "./common.e37b4e82.js";
import { g as computed } from "./index.1a6e03af.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
