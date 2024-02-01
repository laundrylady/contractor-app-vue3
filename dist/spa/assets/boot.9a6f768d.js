import { b as boot$1, u as useUserStore, a as authLogin, c as authLogout } from "./index.4d9fc4f8.js";
import { u as useCommonStore } from "./common.b6946fea.js";
import { a as api } from "./axios.ed3e2e26.js";
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
