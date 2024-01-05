import { b as boot$1, u as useUserStore, a as authLogin, c as authLogout } from "./index.9d7abd75.js";
import { u as useCommonStore } from "./common.e5452c0c.js";
import { a as api } from "./axios.865ad67f.js";
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
