import { b as boot$1, u as useUserStore, a as authLogin, c as authLogout } from "./index.dd540b4f.js";
import { u as useCommonStore } from "./common.613fbab4.js";
import { a as api } from "./axios.a558da08.js";
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
