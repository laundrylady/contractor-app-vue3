import { u as useCommonStore } from "./common.4e9424a1.js";
import { g as computed } from "./index.9b9c09ca.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
