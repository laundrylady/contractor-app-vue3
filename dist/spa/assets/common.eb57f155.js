import { u as useCommonStore } from "./common.71a5521d.js";
import { g as computed } from "./index.99efffbb.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
