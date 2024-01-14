import { b as boot$1, u as useUserStore, a as authLogin, c as authLogout } from "./index.84fae5f5.js";
import { u as useCommonStore } from "./common.8dd2d22d.js";
import { a as api } from "./axios.8eb63b42.js";
var boot = boot$1(async ({ store }) => {
  const commonStore = useCommonStore(store);
  const userStore = useUserStore(store);
  try {
    const common = await api.get("/common");
    commonStore.setCommonData(common.data);
    const check = await api.get("/auth/check");
    userStore.setUserData(check.data);
    authLogin();
  } catch (error) {
    authLogout();
  }
});
export { boot as default };
