import { u as useCommonStore } from "./common.74aecde9.js";
import { g as computed } from "./index.94e66b14.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
