import { b as boot$1, u as useUserStore, a as authLogin, c as authLogout } from "./index.6bc9da2c.js";
import { a as api } from "./axios.d0b87e4b.js";
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
