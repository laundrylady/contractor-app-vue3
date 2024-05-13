import { u as useCommonStore } from "./common.015398af.js";
import { g as computed } from "./index.db72ca64.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
