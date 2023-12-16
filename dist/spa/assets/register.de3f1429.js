import { b as boot } from "./index.bb716ce2.js";
import { P as Plugin } from "./index.esm.c95091bb.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
