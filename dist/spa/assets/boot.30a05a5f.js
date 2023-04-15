import { b as boot$1, a as authLogin, c as authLogout } from "./index.e647c85a.js";
import { u as useUserStore, a as api } from "./axios.ccd3a804.js";
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
