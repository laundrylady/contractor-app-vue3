import { u as useUserStore, f as computed } from "./index.ef1b2cb4.js";
const useMixinSecurity = () => {
  const store = useUserStore();
  const user = computed(() => store.data);
  return { user };
};
export { useMixinSecurity as u };
