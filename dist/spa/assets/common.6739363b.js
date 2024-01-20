import { u as useCommonStore } from "./common.c916233c.js";
import { g as computed } from "./index.71993d48.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
