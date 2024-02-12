import { u as useCommonStore } from "./common.fc7fdc5f.js";
import { g as computed } from "./index.89d87b9d.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
