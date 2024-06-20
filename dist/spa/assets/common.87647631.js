import { u as useCommonStore } from "./common.2864f3ff.js";
import { g as computed } from "./index.370d568b.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
