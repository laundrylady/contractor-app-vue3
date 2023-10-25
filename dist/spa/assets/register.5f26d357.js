import { b as boot } from "./index.d24090f9.js";
import { P as Plugin } from "./index.esm.c15a99b1.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
