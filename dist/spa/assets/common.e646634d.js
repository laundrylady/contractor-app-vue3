import { u as useCommonStore } from "./common.cba49413.js";
import { g as computed } from "./index.36ffcf9b.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
