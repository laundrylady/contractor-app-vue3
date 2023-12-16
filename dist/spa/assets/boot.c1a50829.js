import { b as boot$1, u as useUserStore, a as authLogin, c as authLogout } from "./index.da51b833.js";
import { u as useCommonStore } from "./common.8756b9bd.js";
import { a as api } from "./axios.66bc8d22.js";
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
