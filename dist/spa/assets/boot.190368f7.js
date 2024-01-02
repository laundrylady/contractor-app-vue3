import { b as boot$1, u as useUserStore, a as authLogin, c as authLogout } from "./index.2bb9246b.js";
import { u as useCommonStore } from "./common.b7537706.js";
import { a as api } from "./axios.3b0e4c6b.js";
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
