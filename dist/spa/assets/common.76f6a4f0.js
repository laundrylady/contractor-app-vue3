import { u as useCommonStore } from "./common.613fbab4.js";
import { g as computed } from "./index.dd540b4f.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
