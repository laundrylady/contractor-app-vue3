import { u as useCommonStore } from "./common.4a3a799c.js";
import { g as computed } from "./index.288d251c.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
