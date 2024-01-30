import { b as boot } from "./index.c627736b.js";
import { P as Plugin } from "./index.esm.efa26917.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
