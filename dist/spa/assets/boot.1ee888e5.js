import { b as boot$1, u as useUserStore, a as authLogin, c as authLogout } from "./index.68787ef2.js";
import { u as useCommonStore } from "./common.50fad8db.js";
import { a as api } from "./axios.43fd41e6.js";
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
