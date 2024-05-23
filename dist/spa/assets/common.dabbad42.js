import { u as useCommonStore } from "./common.694acb3c.js";
import { g as computed } from "./index.63580deb.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
