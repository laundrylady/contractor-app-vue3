import { b as boot$1, u as useUserStore, a as authLogin, c as authLogout } from "./index.da11e37d.js";
import { u as useCommonStore } from "./common.c3ffdfc6.js";
import { a as api } from "./axios.cc162f2e.js";
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
