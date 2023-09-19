import { b as boot } from "./index.d79e1fe7.js";
import { P as Plugin } from "./index.esm.e218b417.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
