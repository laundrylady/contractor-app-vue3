import { b as boot$1, u as useUserStore, a as authLogin, c as authLogout } from "./index.9d209411.js";
import { u as useCommonStore } from "./common.70f98851.js";
import { a as api } from "./axios.3379d02c.js";
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
