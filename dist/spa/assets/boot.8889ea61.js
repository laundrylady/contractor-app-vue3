import { b as boot$1, u as useUserStore, a as authLogin, c as authLogout } from "./index.0a9ea33a.js";
import { a as api } from "./axios.2d1b6d62.js";
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
