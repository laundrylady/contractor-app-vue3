import { u as useUserStore, g as computed } from "./index.c08a4e10.js";
const useMixinSecurity = () => {
  const store = useUserStore();
  const user = computed(() => store.data);
  return { user };
};
export { useMixinSecurity as u };
