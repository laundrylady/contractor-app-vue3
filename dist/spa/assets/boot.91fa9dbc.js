import { b as boot$1, u as useUserStore, a as authLogin, c as authLogout } from "./index.b04b1049.js";
import { a as api } from "./axios.aaf6f9f0.js";
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
