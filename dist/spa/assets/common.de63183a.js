import { u as useCommonStore } from "./common.5170790c.js";
import { g as computed } from "./index.ea83ac5e.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
