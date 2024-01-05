import { u as useCommonStore } from "./common.2fe8b91b.js";
import { g as computed } from "./index.b8400575.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
