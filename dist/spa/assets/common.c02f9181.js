import { u as useCommonStore } from "./common.bf08b352.js";
import { g as computed } from "./index.22b0b9b4.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
