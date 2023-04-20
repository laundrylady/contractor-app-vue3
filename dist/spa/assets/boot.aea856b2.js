import { b as boot$1, a as authLogin, c as authLogout } from "./index.e7424e86.js";
import { u as useUserStore, a as api } from "./axios.e112af7f.js";
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
