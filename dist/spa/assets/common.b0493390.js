import { u as useCommonStore } from "./common.ea6ae37c.js";
import { g as computed } from "./index.1d5fa541.js";
const useMixinCommon = () => {
  const store = useCommonStore();
  const common = computed(() => store.data);
  return common;
};
export { useMixinCommon as u };
