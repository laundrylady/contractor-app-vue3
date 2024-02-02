import { u as useCommonStore } from "./common.5876c3ab.js";
import { g as computed } from "./index.9b8b7269.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
