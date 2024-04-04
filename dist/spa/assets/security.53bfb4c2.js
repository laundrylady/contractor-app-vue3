import { u as useUserStore, g as computed } from "./index.1962d2ae.js";
const useMixinSecurity = () => {
  const store = useUserStore();
  const user = computed(() => store.data);
  return { user };
};
export { useMixinSecurity as u };
