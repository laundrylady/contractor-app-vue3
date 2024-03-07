import { u as useCommonStore } from "./common.ab0bd01b.js";
import { g as computed } from "./index.83437ab4.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
