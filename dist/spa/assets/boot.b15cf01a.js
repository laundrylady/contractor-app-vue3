import { b as boot$1, u as useUserStore, a as authLogin, c as authLogout } from "./index.ede44c03.js";
import { u as useCommonStore } from "./common.b0d3ec20.js";
import { a as api } from "./axios.e6d93a62.js";
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
