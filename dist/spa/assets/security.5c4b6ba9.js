import { u as useUserStore, g as computed } from "./index.f6bee7e8.js";
const useMixinSecurity = () => {
  const store = useUserStore();
  const user = computed(() => store.data);
  return { user };
};
export { useMixinSecurity as u };
