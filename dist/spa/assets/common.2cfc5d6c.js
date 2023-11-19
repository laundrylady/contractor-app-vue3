import { u as useCommonStore } from "./common.9fdaeb6c.js";
import { g as computed } from "./index.56d10e03.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
