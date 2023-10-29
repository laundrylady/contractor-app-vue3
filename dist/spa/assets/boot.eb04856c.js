import { b as boot$1, u as useUserStore, a as authLogin, c as authLogout } from "./index.fa2b967f.js";
import { u as useCommonStore } from "./common.0087a8e2.js";
import { a as api } from "./axios.814b97a2.js";
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
