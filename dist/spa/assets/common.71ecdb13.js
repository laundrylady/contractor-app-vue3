import { u as useCommonStore } from "./common.70f98851.js";
import { g as computed } from "./index.9d209411.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
