import { b as boot$1, u as useUserStore, a as authLogin, c as authLogout } from "./index.ed79211e.js";
import { u as useCommonStore } from "./common.84319d85.js";
import { a as api } from "./axios.eac371de.js";
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
