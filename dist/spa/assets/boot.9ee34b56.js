import { b as boot$1, u as useUserStore, a as authLogin, c as authLogout } from "./index.91814ea0.js";
import { u as useCommonStore } from "./common.56a31301.js";
import { a as api } from "./axios.ebe2df20.js";
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
