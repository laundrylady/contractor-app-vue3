import { b as boot$1, u as useUserStore, a as authLogin, c as authLogout } from "./index.603eb027.js";
import { u as useCommonStore } from "./common.91989823.js";
import { a as api } from "./axios.fc054a7a.js";
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
