import { b as boot$1, a as authLogin, c as authLogout } from "./index.f596c8b4.js";
import { u as useUserStore, a as api } from "./axios.165a10e8.js";
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
