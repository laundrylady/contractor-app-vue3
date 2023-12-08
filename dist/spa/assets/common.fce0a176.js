import { u as useCommonStore } from "./common.b2a333a7.js";
import { g as computed } from "./index.d21e33cc.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
