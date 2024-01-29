import { b as boot } from "./index.bb02fd1d.js";
import { P as Plugin } from "./index.esm.645ac51d.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
