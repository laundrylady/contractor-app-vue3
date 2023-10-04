import { b as boot$1, u as useUserStore, a as authLogin, c as authLogout } from "./index.8de11d6d.js";
import { a as api } from "./axios.c31e8ac7.js";
var boot = boot$1(async ({ store }) => {
  const userStore = useUserStore(store);
  try {
    const check = await api.get("/auth/check");
    userStore.setUserData(check.data);
    authLogin();
  } catch (error) {
    authLogout();
  }
});
export { boot as default };
