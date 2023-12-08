import { b as boot$1, u as useUserStore, a as authLogin, c as authLogout } from "./index.88cb70e0.js";
import { u as useCommonStore } from "./common.54530ba8.js";
import { a as api } from "./axios.9c2c3a49.js";
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
